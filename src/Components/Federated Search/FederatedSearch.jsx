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
    setModal,
    setWomen,
    setMen,
    setGirls,
    setBoys,
    setSale,
    men,
    women,
    girls,
    boys,
    sale
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
                        <CustomSuggestions
                            query={query}
                            setQuery={setQuery}
                            setShowFederatedSearch={setShowFederatedSearch}
                            setSearchVisible={setSearchVisible}
                            setSale={setSale}
                            setBoys={setBoys}
                            setGirls={setGirls}
                            setMen={setMen}
                            setWomen={setWomen}
                        />
                    </div>
                </div>
                <div className="federatedSearch-products">
                    <Configure hitsPerPage={6} getRankingInfo={true} />
                    <CustomHitsFederated
                        setProduct={setProduct}
                        setModal={setModal}
                        setShowFederatedSearch={setShowFederatedSearch}
                        setSearchVisible={setSearchVisible}
                        men={men}
                        women={women}
                        girls={girls}
                        sale={sale}
                        boys={boys}
                    />
                </div>
            </div>
        </div>
    );
};

export default FederatedSearch;
