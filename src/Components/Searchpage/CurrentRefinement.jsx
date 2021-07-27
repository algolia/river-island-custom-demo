import React from 'react'
// ALGOLIA'S IMPORT
import {
    connectCurrentRefinements
} from 'react-instantsearch-dom';
// UNIQBY LIB
import uniqBy from 'lodash.uniqby';


const CurrentRefinementSR = () => {
    return (   
    <CustomCurrentRefinements
        transformItems={items =>
            items.filter(item => item.attribute !== 'price')
        }/> );
}

const CurrentRefinements = ({ items, refine }) => {
    const unique = uniqBy(items, 'currentRefinement');


    return (
        <ul className="refinement-content">
            {unique.map(item => (
                <li className="refinement-item" key={item.label}>
                    {item.items ? (
                        <React.Fragment>
                            {/* <h3>{item.label}</h3> */}
                            <ul className="refinement-results">
                                {item.items.map(nested => (
                                    <li key={nested.label}>
                                        <button
                                            className="refinement-filter"
                                            href="#"
                                            onClick={event => {
                                                event.preventDefault();
                                                refine(nested.value);
                                            }}
                                        >
                                            {nested.label.includes(">") ? nested.label.split(">")[1] : nested.label}
                                            <span onClick={()=>{
                                            refine(item.value);
                                        }}>X</span>
                                        </button>
                                      
                                    </li>
                                ))}
                            </ul>
                        </React.Fragment>
                    ) : (
                        <button
                            href="#"
                            onClick={event => {
                                event.preventDefault();
                                refine(item.value);
                             
                            }}
                        >
                            {item.label}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);
 
export default CurrentRefinementSR;