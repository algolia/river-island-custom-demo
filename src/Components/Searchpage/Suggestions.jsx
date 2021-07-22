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
    setSale
}) => {
    return (
        <div className="suggestions-container">
            {hits.slice(0, 9).map(hit => (
                <div
                    key={hit.name}
                    className="suggestion"
                    onClick={e => {
                        setQuery(e.currentTarget.innerText);
                        setShowFederatedSearch(false);
                        setSearchVisible(true);
                        setWomen(false);
                        setSearchVisible(true);
                        setMen(false);
                        setGirls(false);
                        setBoys(false);
                        setSale(false);
                    }}
                >
                    <Highlight hit={hit} attribute="name" />
                    {/* <p>{hit.name}</p> */}
                </div>
            ))}
        </div>
    );
};

const CustomSuggestions = connectHits(Suggestions);

export default CustomSuggestions;
