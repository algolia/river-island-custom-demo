import React from 'react';

// ALGOLIA IMPORT
import { Configure } from 'react-instantsearch-dom';

// COMPONENT IMPORT
import { CustomHitsFederated } from '../Searchpage/Hits';
import CustomSuggestions from '../Searchpage/Suggestions';
// import {HierarchicalMenu, CatRefinementLists, CustomFilters, CustomCateRefinementList} from '../Searchage/Filters'

const FederatedSearch = ({
    query,
    setQuery,
    setShowFederatedSearch,
    showFederatedSearch,
    searchVisible,
    setSearchVisible,
    setProduct,
    setModal
}) => {
    return (
        <div className="federatedSearch">
            <div className="federatedSearch-wrapper">
                {/* <div className="federatedSearch-categories">
            
            <h3>Gender</h3>
            <CustomCateRefinementList attribute='GENDER'/>
            <h3>Age</h3>
            <CustomCateRefinementList attribute='age_group'/>
            <h3>Color</h3>
            <CustomCateRefinementList attribute='color'/> 
        </div> */}
                <div className="federatedSearch-suggestions">
                    <div className="suggestions-content">
                        <h3>Suggestions</h3>
                        <CustomSuggestions query={query} setQuery={setQuery} />
                    </div>
                </div>
                <div className="federatedSearch-products">
                    {/* <CustomSearchBox
                        style={{ display: 'none' }}
                        query={query}
                        setQuery={setQuery}
                        setShowFederatedSearch={setShowFederatedSearch}
                        showFederatedSearch={showFederatedSearch}
                        searchVisible={searchVisible}
                        setSearchVisible={setSearchVisible}
                    /> */}
                    {/* <h3 className="federated-title">Products</h3> */}
                    <Configure hitsPerPage={6} getRankingInfo={true} />
                    <CustomHitsFederated
                        setProduct={setProduct}
                        setModal={setModal}
                        setShowFederatedSearch={setShowFederatedSearch}
                        setSearchVisible={setSearchVisible}
                    />
                </div>
            </div>
        </div>
    );
};

export default FederatedSearch;
