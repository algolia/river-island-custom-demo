import React, { useState } from 'react';

// CSS / SCSS

import './SCSS/index.scss';

// COMPONENTS
import Header from './Components/Header/Header';
import SearchResults from './Components/Searchpage/SearchResult';
import Homepage from './Components/Homepage/Homepage';
import { InstantSearch } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

const App = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [women, setWomen] = useState(false);
    const [men, setMen] = useState(false);
    const [girls, setGirls] = useState(false);
    const [boys, setBoys] = useState(false);
    const [sale, setSale] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [query, setQuery] = useState('');
    const [showFederatedSearch, setShowFederatedSearch] = useState(false);
    const [homepage, setHomepage] = useState(true);
    const searchClient = algoliasearch(window.appID, window.key);
    return (
        <div className="app">
            <InstantSearch searchClient={searchClient} indexName={window.index}>
                <Header
                    setHomepage={setHomepage}
                    homepage={homepage}
                    setQuery={setQuery}
                    query={query}
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
                    sale={sale}
                    setSale={setSale}
                    setShowFederatedSearch={setShowFederatedSearch}
                    showFederatedSearch={showFederatedSearch}
                />
                <SearchResults
                    setQuery={setQuery}
                    selectedOption={selectedOption}
                    searchVisible={searchVisible}
                    setSearchVisible={setSearchVisible}
                    women={women}
                    men={men}
                    girls={girls}
                    boys={boys}
                    sale={sale}
                    setSale={setSale}
                    setBoys={setBoys}
                    setGirls={setGirls}
                    setMen={setMen}
                    setWomen={setWomen}
                    query={query}
                    setShowFederatedSearch={setShowFederatedSearch}
                    showFederatedSearch={showFederatedSearch}
                    setHomepage={setHomepage}
                    homepage={homepage}
                />
                <Homepage
                showFederatedSearch={showFederatedSearch}
                    setShowFederatedSearch={setShowFederatedSearch}
                    searchVisible={searchVisible}
                    women={women}
                    men={men}
                    girls={girls}
                    boys={boys}
                    sale={sale}
                />
            </InstantSearch>
        </div>
    );
};

export default App;
