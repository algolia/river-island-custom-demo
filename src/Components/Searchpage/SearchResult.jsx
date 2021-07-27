import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';

import {
    Pagination,
    Configure,
    QueryRuleCustomData,
    Index,
    InstantSearch
} from 'react-instantsearch-dom';



//COMPONENTS
import { CustomHits } from './Hits';
import { CustomFilters } from './Filters';
import VirtualSearchBox from './VirtualSearchBox';
import ProductDetails from '../ProductsDetails/ProductsDetails';
import Banner from './banner';
import CurrentRefinementSR from './CurrentRefinement'
// import CustomSuggestions from './Suggestions';
import FederatedSearch from '../Federated Search/FederatedSearch';

const SearchResults = ({
    query,
    setQuery,
    selectedOption,
    searchVisible,
    setSearchVisible,
    women,
    men,
    girls,
    boys,
    sale,
    setWomen,
    setMen,
    setGirls,
    setBoys,
    setSale,
    showFederatedSearch,
    setShowFederatedSearch,
    setInputValue,
    inputValue
}) => {
    // const searchClient = algoliasearch(window.appID, window.key);
    const [filterAnim, setFilterAnim] = useState(true);
    const [product, setProduct] = useState(null);
    const [modal, setModal] = useState(false);
    const [isDynamicFactesOn, setIsDynamicFactesOn] = useState(false);
    const searchClient = algoliasearch(window.appID, window.key);
    console.log(query)
    return (
        <div className="searchResult-wrapper">
            <div
                className={`container-federated ${
                    showFederatedSearch ? 'active' : 'hidden'
                }`}
                onClick={e => {
                    if (e.target === e.currentTarget) {
                        setShowFederatedSearch(false);
                    }
                }}
            >
                {women || men || girls || boys || sale ? (
                    <div>
                    <InstantSearch
                    searchClient={searchClient} indexName={window.index} indexId="categoryPage"
                    >
                    <VirtualSearchBox 
                        query={query}
                        setQuery={setQuery} />
                    <FederatedSearch
                        query={query}
                        setQuery={setQuery}
                        setShowFederatedSearch={setShowFederatedSearch}
                        showFederatedSearch={showFederatedSearch}
                        searchVisible={searchVisible}
                        setSearchVisible={setSearchVisible}
                        setProduct={setProduct}
                        setModal={setModal}
                        setSale={setSale}
                        setBoys={setBoys}
                        setGirls={setGirls}
                        setMen={setMen}
                        setWomen={setWomen}
                        men={men}
                        women={women}
                        girls={girls}
                        boys={boys}
                        sale={sale}
                    />
                    </InstantSearch>
                    <Configure query=""/>
                    </div>
                ) : (
                  null
                )}

            </div>
            <div
                className={`container ${
                    searchVisible || women || men || girls || boys || sale
                        ? 'active'
                        : 'hidden'
                }`}
            >
                <QueryRuleCustomData
                    transformItems={items => {
                        const match = items.find(data =>
                            Boolean(data.redirect)
                        );
                        if (match && match.redirect) {
                            window.location.href = match.redirect;
                        }
                        return [];
                    }}
                >
                    {() => null}
                </QueryRuleCustomData>
                <div></div>
                <div className="search-panel">
                    <Banner />
                    <CurrentRefinementSR/>

                    {women ? (
                        <div className="searchPanel-results">
                            <FilterBtn
                                filterAnim={filterAnim}
                                setFilterAnim={setFilterAnim}
                            />
                            <CustomFilters
                                filterAnim={filterAnim}
                                isDynamicFactesOn={isDynamicFactesOn}
                                setIsDynamicFactesOn={setIsDynamicFactesOn}
                            />
                            <Configure
                                filters="breadcrumbs.lvl0:women"
                                hitsPerPage={21}
                                getRankingInfo={true}
                                enablePersonalization={true}
                            />
                            <CustomHits
                                setModal={setModal}
                                setProduct={setProduct}
                                setShowFederatedSearch={setShowFederatedSearch}
                                setSearchVisible={setSearchVisible}
                            />
                        </div>
                    ) : (
                        // <div className="searchPanel-results">
                        //     <Configure userToken={selectedOption} enablePersonalization={true} />
                        //     <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                        //     <CustomFilters filterAnim={filterAnim} />
                        //     <CustomHits setProduct={setProduct} setModal={setModal} />
                        // </div>
                        ''
                    )}
                    {men ? (
                        <div className="searchPanel-results">
                            <FilterBtn
                                filterAnim={filterAnim}
                                setFilterAnim={setFilterAnim}
                            />
                            <Configure
                                userToken={selectedOption}
                                getRankingInfo={true}
                                hitsPerPage={21}
                                filters="breadcrumbs.lvl0:men"
                                enablePersonalization={true}
                            />
                            <CustomFilters
                                filterAnim={filterAnim}
                                isDynamicFactesOn={isDynamicFactesOn}
                                setIsDynamicFactesOn={setIsDynamicFactesOn}
                            />
                            <CustomHits
                                setModal={setModal}
                                setProduct={setProduct}
                                setShowFederatedSearch={setShowFederatedSearch}
                                setSearchVisible={setSearchVisible}
                            />
                        </div>
                    ) : (
                        // <div className="searchPanel-results">
                        //     <Configure userToken={selectedOption} enablePersonalization={true} />
                        //     <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                        //     <CustomFilters filterAnim={filterAnim} />
                        //     <CustomHits setProduct={setProduct} setModal={setModal} />
                        // </div>
                        ''
                    )}
                    {girls ? (
                        <div className="searchPanel-results">
                            <FilterBtn
                                filterAnim={filterAnim}
                                getRankingInfo={true}
                                setFilterAnim={setFilterAnim}
                            />
                            <Configure
                                userToken={selectedOption}
                                filters="breadcrumbs.lvl0:girls"
                                enablePersonalization={true}
                                hitsPerPage={21}
                                getRankingInfo={true}
                            />
                            <CustomFilters
                                filterAnim={filterAnim}
                                isDynamicFactesOn={isDynamicFactesOn}
                                setIsDynamicFactesOn={setIsDynamicFactesOn}
                            />
                            <CustomHits
                                setModal={setModal}
                                setProduct={setProduct}
                                setShowFederatedSearch={setShowFederatedSearch}
                                setSearchVisible={setSearchVisible}
                            />
                        </div>
                    ) : (
                        // <div className="searchPanel-results">
                        //     <Configure userToken={selectedOption} enablePersonalization={true} />
                        //     <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                        //     <CustomFilters filterAnim={filterAnim} />
                        //     <CustomHits setProduct={setProduct} setModal={setModal} />
                        // </div>
                        ''
                    )}
                    {boys ? (
                        <div className="searchPanel-results">
                            <FilterBtn
                                filterAnim={filterAnim}
                                setFilterAnim={setFilterAnim}
                            />
                            <Configure
                                userToken={selectedOption}
                                getRankingInfo={true}
                                filters="breadcrumbs.lvl0:boys"
                                hitsPerPage={21}
                                enablePersonalization={true}
                            />
                            <CustomFilters
                                filterAnim={filterAnim}
                                isDynamicFactesOn={isDynamicFactesOn}
                                setIsDynamicFactesOn={setIsDynamicFactesOn}
                            />
                            <CustomHits
                                setModal={setModal}
                                setProduct={setProduct}
                                setShowFederatedSearch={setShowFederatedSearch}
                                setSearchVisible={setSearchVisible}
                            />
                        </div>
                    ) : (
                        // <div className="searchPanel-results">
                        //     <Configure userToken={selectedOption} enablePersonalization={true} />
                        //     <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                        //     <CustomFilters filterAnim={filterAnim} />
                        //     <CustomHits setProduct={setProduct} setModal={setModal} />
                        // </div>
                        ''
                    )}
                    {sale ? (
                        <div className="searchPanel-results">
                            <FilterBtn
                                filterAnim={filterAnim}
                                setFilterAnim={setFilterAnim}
                            />
                            <Configure
                                userToken={selectedOption}
                                enablePersonalization={true}
                                ruleContexts={'sale'}
                                hitsPerPage={21}
                                getRankingInfo={true}
                            />
                            <CustomFilters
                                filterAnim={filterAnim}
                                isDynamicFactesOn={isDynamicFactesOn}
                                setIsDynamicFactesOn={setIsDynamicFactesOn}
                            />
                            <CustomHits
                                setModal={setModal}
                                setProduct={setProduct}
                                setShowFederatedSearch={setShowFederatedSearch}
                                setSearchVisible={setSearchVisible}
                            />
                        </div>
                    ) : (
                        // <div className="searchPanel-results">
                        //     <Configure userToken={selectedOption} enablePersonalization={true} />
                        //     <FilterBtn filterAnim={filterAnim} setFilterAnim={setFilterAnim} />
                        //     <CustomFilters filterAnim={filterAnim} />
                        //     <CustomHits setProduct={setProduct} setModal={setModal} />
                        // </div>
                        ''
                    )}
                    {searchVisible ? (
                        <div className="searchPanel-results">
                            <Configure
                                userToken={selectedOption}
                                enablePersonalization={true}
                                getRankingInfo={true}
                                hitsPerPage={21}
                            />
                            <FilterBtn
                                filterAnim={filterAnim}
                                setFilterAnim={setFilterAnim}
                            />
                            <CustomFilters
                                filterAnim={filterAnim}
                                isDynamicFactesOn={isDynamicFactesOn}
                                setIsDynamicFactesOn={setIsDynamicFactesOn}
                            />
                            <CustomHits
                                setModal={setModal}
                                setProduct={setProduct}
                                setShowFederatedSearch={setShowFederatedSearch}
                                setSearchVisible={setSearchVisible}
                            />
                        </div>
                    ) : (
                        ''
                    )}

                    <div className="pagination">
                        <Pagination />
                    </div>
                </div>
            </div>
            {modal ? (
                <div
                    className="modal-bg"
                    onClick={e => {
                        if (e.target === e.currentTarget) {
                            setModal(false);
                        }
                    }}
                >
                    <div className="modal-wrapper fadeModal">
                        <ProductDetails product={product} setModal={setModal} />
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

const FilterBtn = ({ filterAnim, setFilterAnim }) => {
    return (
        <div
            className="filterBtn"
            onClick={() => {
                setFilterAnim(!filterAnim);
            }}
        >
            <p>NAVIGATION & FILTERS</p>
            {filterAnim ? <p>-</p> : <p>+</p>}
        </div>
    );
};

export default SearchResults;
