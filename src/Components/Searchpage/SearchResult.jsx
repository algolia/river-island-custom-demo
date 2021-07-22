import React, { useState } from 'react';

import {
    Pagination,
    Configure,
    QueryRuleCustomData,
    Index
} from 'react-instantsearch-dom';

//COMPONENTS
import { CustomHits } from './Hits';
import { CustomFilters } from './Filters';
// import CustomSearchBox from './SearchBox';
import ProductDetails from '../ProductsDetails/ProductsDetails';
import Banner from './banner';
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

    return (
        <div className="searchResult-wrapper">
            <div
                className={`container-federated ${
                    showFederatedSearch ? 'active' : 'hidden'
                }`}
            >
                <FederatedSearch
                    query={query}
                    setQuery={setQuery}
                    setShowFederatedSearch={setShowFederatedSearch}
                    showFederatedSearch={showFederatedSearch}
                    searchVisible={searchVisible}
                    setSearchVisible={setSearchVisible}
                    setProduct={setProduct}
                    setModal={setModal}
                />
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
                    {/* <CustomSearchBox
                        style={{ display: 'none' }}
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        query={query}
                        setQuery={setQuery}
                        searchVisible={searchVisible}
                        setSearchVisible={setSearchVisible}
                        setShowFederatedSearch={setShowFederatedSearch}
                        showFederatedSearch={setShowFederatedSearch}
                    /> */}
                    <Index indexName={window.indexSugg} indexId="suggestions">
                        {/* <CustomSuggestions
                                setQuery={setQuery}
                                query={query}
                                attribute="name"
                            /> */}
                    </Index>
                    <Banner />

                    {women ? (
                        <div className="searchPanel-results">
                            <FilterBtn
                                filterAnim={filterAnim}
                                setFilterAnim={setFilterAnim}
                            />
                            <Configure
                                filters="breadcrumbs.lvl0:women"
                                hitsPerPage={20}
                                getRankingInfo={true}
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
                    {men ? (
                        <div className="searchPanel-results">
                            <FilterBtn
                                filterAnim={filterAnim}
                                setFilterAnim={setFilterAnim}
                            />
                            <Configure
                                userToken={selectedOption}
                                getRankingInfo={true}
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
                            />
                            <FilterBtn
                                filterAnim={filterAnim}
                                setFilterAnim={setFilterAnim}
                            />
                            {/* <CustomFilters
                                    filterAnim={filterAnim}
                                    isDynamicFactesOn={isDynamicFactesOn}
                                    setIsDynamicFactesOn={setIsDynamicFactesOn}
                                /> */}
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
