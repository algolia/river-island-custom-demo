import React from 'react';
import { connectHits, Highlight } from 'react-instantsearch-dom';

const Suggestions = ({
    hits,
    setQuery,
    refine,
    setShowFederatedSearch,
    setSearchVisible,
    setWomen,
    setMen,
    setGirls,
    setBoys,
    setSale,
    setHomepage
}) => {
console.log(setHomepage)
    return (
        <div className="suggestions-container">
            {hits.slice(0, 5).map(hit => (
                <div
                    key={hit.query}
                    className="suggestion"
                    onClick={e => {
                        setQuery(e.currentTarget.innerText);
                        setSearchVisible(true);
                        setShowFederatedSearch(false);
                        setWomen(false);
                        setMen(false);
                        setGirls(false);
                        setBoys(false);
                        setSale(false);
                        setHomepage(false);
                    }}
                >
                    <Highlight hit={hit} attribute="query" />
                    {/* <p>{hit.name}</p> */}
                </div>
            ))}
        </div>
    );
};

const CustomSuggestions = connectHits(Suggestions);

export default CustomSuggestions;
