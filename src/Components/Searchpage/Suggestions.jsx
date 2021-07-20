import React from 'react';
import { connectHits } from 'react-instantsearch-dom';

const Suggestions = ({ hits, setQuery, refine }) => {
    return (
        <div className="suggestions-container">
            {hits.slice(0, 9).map(hit => (
                <div
                    key={hit.name}
                    className="suggestion"
                    onClick={e => setQuery(e.target.innerText)}
                >
                    {/* <Highlight hit={hit} attribute="name" /> */}
                    <p>{hit.name}</p>
                </div>
            ))}
        </div>
    );
};

const CustomSuggestions = connectHits(Suggestions);

export default CustomSuggestions;
