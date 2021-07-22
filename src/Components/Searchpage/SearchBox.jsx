import React from 'react';

// ALGOLIA'S IMPORT
import {
    connectSearchBox
    // VoiceSearch
    // connectCurrentRefinements
} from 'react-instantsearch-dom';

// UNIQBY LIB
// import uniqBy from 'lodash.uniqby';

const SearchBox = ({
    refine,
    setQuery,
    currentRefinements,
    setShowFederatedSearch,
    setSearchVisible,
    query
}) => {
    if (query === '') {
        console.log('IF', query);
        refine('')
        return (
            <div>
                <div className="searchBox-wrapper">
                    <form
                        action=""
                        role="search"
                        onSubmit={e => {
                            e.preventDefault();
                            setShowFederatedSearch(false);
                            setSearchVisible(true);
                            // setQuery(e.currentTarget.value);
                        }}
                    >
                        <input
                            id="input-search2"
                            type="search"
                            value={query}
                            onChange={event => {
                                setQuery(event.currentTarget.value);
                                setShowFederatedSearch(true);
                                refine(event.currentTarget.value);
                            }}
                            placeholder="Search..."
                        />
                    </form>
                    {/* <VoiceSearch searchAsYouSpeak={false} language={'en-US'} /> */}
                </div>
                {/* <CustomCurrentRefinements
                    transformItems={items =>
                        items.filter(item => item.attribute !== 'price')
                    }
                /> */}
            </div>
        );
    } else {
        refine(query);
        console.log('ELSE', query);
        return (
            <div>
                <div className="searchBox-wrapper">
                    <form
                        action=""
                        role="search"
                        onSubmit={e => {
                            e.preventDefault();
                            setShowFederatedSearch(false);
                            setSearchVisible(true);
                            // setQuery(e.currentTarget.value);
                        }}
                    >
                        <input
                            id="input-search2"
                            type="search"
                            value={query}
                            onChange={event => {
                                setQuery(event.currentTarget.value);
                                setShowFederatedSearch(true);
                                refine(query);
                            }}
                            placeholder="Search..."
                        />
                    </form>
                    {/* <VoiceSearch searchAsYouSpeak={false} language={'en-US'} /> */}
                </div>
                {/* <CustomCurrentRefinements
                    transformItems={items =>
                        items.filter(item => item.attribute !== 'price')
                    }
                /> */}
            </div>
        );
    }
};
// else {
//     refine(query);
//     return (
//         <div>
//             <div className="searchBox-wrapper">
//                 <form
//                     action=""
//                     role="search"
//                     onSubmit={e => {
//                         e.preventDefault();
//                         setShowFederatedSearch(false);
//                         setSearchVisible(true);
//                         setQuery(e.currentTarget.value);
//                     }}
//                 >
//                     <input
//                         id="input-search2"
//                         type="search"
//                         value={query}
//                         onChange={event => {
//                             // setQuery(event.currentTarget.value);
//                             console.log(
//                                 'Event2',
//                                 event.currentTarget.value
//                             );
//                             console.log('Query', query);
//                             setShowFederatedSearch(true);
//                             refine(event.currentTarget.value);
//                         }}
//                         placeholder="Search..."
//                     />
//                 </form>
//                 {/* <VoiceSearch searchAsYouSpeak={false} language={'en-US'} /> */}
//             </div>
//             {/* <CustomCurrentRefinements
//                     transformItems={items =>
//                         items.filter(item => item.attribute !== 'price')
//                     }
//                 /> */}
//         </div>
//     );
// }

// const CurrentRefinements = ({ items, refine }) => {
//     const unique = uniqBy(items, 'currentRefinement');

//     return (
//         <ul className="refinement-content">
//             {unique.map(item => (
//                 <li className="refinement-item" key={item.label}>
//                     {item.items ? (
//                         <React.Fragment>
//                             <h3>{item.label}</h3>
//                             <ul className="refinement-results">
//                                 {item.items.map(nested => (
//                                     <li key={nested.label}>
//                                         <button
//                                             className="refinement-filter"
//                                             href="#"
//                                             onClick={event => {
//                                                 event.preventDefault();
//                                                 refine(nested.value);
//                                             }}
//                                         >
//                                             {nested.label}
//                                         </button>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </React.Fragment>
//                     ) : (
//                         <button
//                             href="#"
//                             onClick={event => {
//                                 event.preventDefault();
//                                 refine(item.value);
//                             }}
//                         >
//                             {item.label}
//                         </button>
//                     )}
//                 </li>
//             ))}
//         </ul>
//     );
// };

// const CustomCurrentRefinements = connectCurrentRefinements(CurrentRefinements);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
