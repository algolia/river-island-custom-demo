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
    const [men, setMen] = useState(false);
    const [girls, setGirls] = useState(false);
    const [boys, setBoys] = useState(false);
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
                men={men}
                setMen={setMen}
                girls={girls}
                boys={boys}
                setBoys={setBoys}
                setGirls={setGirls}
                setShowFederatedSearch={setShowFederatedSearch}
                showFederatedSearch={showFederatedSearch}
            />
            <SearchResults
                selectedOption={selectedOption}
                searchVisible={searchVisible}
                setSearchVisible={setSearchVisible}
                women={women}
                men={men}
                girls={girls}
                boys={boys}
                query={query}
                setQuery={setQuery}
                setShowFederatedSearch={setShowFederatedSearch}
                showFederatedSearch={showFederatedSearch}
            />
            <Homepage searchVisible={searchVisible} women={women} men={men} />
        </div>
    );
};

export default App;
