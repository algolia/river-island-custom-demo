import React, { useState } from 'react';

//CSS / SCSS

import './SCSS/index.scss';

//COMPONENTS
import Header from './Components/Header/Header';
import SearchResults from './Components/Searchpage/SearchResult';
import Homepage from './Components/Homepage/Homepage';

const App = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [women, setWomen] = useState(false);
    const [catTwo, setCatTwo] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [query, setQuery] = useState('');
    const [showFederatedSearch, setShowFederatedSearch] = useState(false);
    return (
        <div>
            <Header
                setSelectedOption={setSelectedOption}
                searchVisible={searchVisible}
                setSearchVisible={setSearchVisible}
                women={women}
                setWomen={setWomen}
                catTwo={catTwo}
                setCatTwo={setCatTwo}
                setShowFederatedSearch={setShowFederatedSearch}
                showFederatedSearch={showFederatedSearch}
            />
            <SearchResults
                selectedOption={selectedOption}
                searchVisible={searchVisible}
                setSearchVisible={setSearchVisible}
                women={women}
                catTwo={catTwo}
                query={query}
                setQuery={setQuery}
                setShowFederatedSearch={setShowFederatedSearch}
                showFederatedSearch={showFederatedSearch}
            />
            <Homepage
                searchVisible={searchVisible}
                women={women}
                catTwo={catTwo}
            />
        </div>
    );
};

export default App;
