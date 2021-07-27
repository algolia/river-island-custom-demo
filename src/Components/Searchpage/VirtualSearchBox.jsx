import React from 'react';

// ALGOLIA'S IMPORT
import { connectSearchBox } from 'react-instantsearch-dom';

const SearchBox = ({
    refine,
    setQuery,
    currentRefinements,
    query,
}) => {
    refine(query)
    return null
}


const VirtualSearchBox = connectSearchBox(SearchBox);

export default VirtualSearchBox;