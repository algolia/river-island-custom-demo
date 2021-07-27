import React from 'react';

// ALGOLIA IMPORT
import { Configure, Index, QueryRuleCustomData } from 'react-instantsearch-dom';

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
                <div className="federatedSearch-suggestions">
                    <div className="suggestions-content">
                        <h3>Suggestions</h3>
                        <Index indexName={window.indexSugg} indexId="suggestions">
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
                        </Index>
                       
                        <QueryRuleCustomData>
                            {({ items }) => {
                            return items.map(({injected, button, image, target, title }) => {
                                if(injected){
                                    return(
                                    <div>
                                    <div className="separator"></div>
                                    <div className="injected-content-wrapper">
                                       
                                        <img src={image} alt={title}/>
                                        <h3>{title}</h3>
                                        <a href={target}>{button}</a>
                                    </div>
                                    </div>
                                    )}
                                })
                            }
                            }
                        </QueryRuleCustomData>
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
