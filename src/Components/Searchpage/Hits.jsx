import React from 'react';

import {
    Highlight,
    SortBy,
    Stats,
    connectHits,
} from 'react-instantsearch-dom';

// MAIN SEARCH RESULT PAGE + FEDERATED
const Hits = ({
    hits,
    setProduct,
    setModal,
    setShowFederatedSearch,
    setSearchVisible
}) => {
    return (
        <div className="hits-wrapper">
            <div className="sort-and-stat">
                <Stats />
                <SortBy
                    defaultRefinement={window.index}
                    items={[
                        {
                            value: window.index_new,
                            label: 'Newness'
                        },
                        {
                            value: window.index_desc,
                            label: 'Price Desc'
                        },
                        {
                            value: window.index_asc,
                            label: 'Price Asc.'
                        }
                    ]}
                />
            </div>
            <ul className="hits-list">
                {hits.map(hit => (
                    <li
                        key={hit.objectID}
                        className="hit-list"
                        onClick={() => {
                            setProduct(hit);
                            setModal(true);
                            setShowFederatedSearch(false);
                            setSearchVisible(true);
                        }}
                    >
                        <div className="image-wrapper">
                            <img src={hit.images[0].url} alt="" />
                        </div>
                        <div className="infos">
                            <h3>
                                <Highlight
                                    hit={hit}
                                    attribute="name"
                                    className="title-hit"
                                />
                            </h3>
                            <p>$ {hit.homeCost}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const HitsFederated = ({
    hits,
    setProduct,
    setModal,
    setShowFederatedSearch,
    setSearchVisible
}) => {
    return (
        <div className="hits-wrapper">
            <div className="sort-and-stat">
                <Stats />
            </div>
            <ul className="hits-list">
                {hits.map(hit => (
                    <li
                        key={hit.objectID}
                        className="hit-list"
                        onClick={() => {
                            setProduct(hit);
                            setModal(true);
                            setShowFederatedSearch(false);
                            setSearchVisible(true);
                        }}
                    >
                        <div className="image-wrapper">
                            <img src={hit.images[0].url} alt="" />
                        </div>
                        <div className="infos">
                            <h3>
                                <Highlight
                                    hit={hit}
                                    attribute="name"
                                    className="title-hit"
                                />
                            </h3>
                            <p>$ {hit.homeCost}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// PDP
const HitsModal = ({ hits }) => {
    return (
        <div className="hits-wrapper">
            <ul className="hits-list hits-list-modal">
                {hits.map(hit => (
                    <li key={hit.objectID} className="hit-list">
                        <div className="image-wrapper">
                            <img src={hit.images[0].url} alt="" />
                        </div>
                        <div className="infos">
                            <h3>
                                <Highlight
                                    hit={hit}
                                    attribute="name"
                                    className="title-hit"
                                />
                            </h3>
                            <p>$ {hit.homeCost}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const CustomHits = connectHits(Hits);
const CustomHitsModal = connectHits(HitsModal);
const CustomHitsFederated = connectHits(HitsFederated);


export { CustomHits, CustomHitsModal, CustomHitsFederated };
