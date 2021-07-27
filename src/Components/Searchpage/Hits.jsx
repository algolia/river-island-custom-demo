import React from 'react';

import { Highlight, SortBy, Stats, connectHits } from 'react-instantsearch-dom';

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
            <ul
                className={`hits-list ${
                    hits.length < 3 ? 'hits-list-small' : ''
                }`}
            >
                {hits.map(hit => {
                    if (hit._rankingInfo) {
                        return (
                            <li
                                key={hit.objectID}
                                className={`hit-list ${
                                    hit._rankingInfo.promoted ? 'promoted' : ''
                                }`}
                                onClick={() => {
                                    setProduct(hit);
                                    setModal(true);
                                    setShowFederatedSearch(false);
                                    setSearchVisible(true);
                                }}
                            >
                                <div className="image-wrapper">
                                    <img
                                        src={
                                            hit.images
                                                ? hit.images[0].url
                                                : 'https://images.unsplash.com/photo-1523878288860-7ad281611901?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGV4dHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                                        }
                                        alt=""
                                    />
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
                        );
                    } else {
                        return '';
                    }
                })}
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
    if (hits) {
        return (
            <div className="hits-wrapper">
                <div className="sort-and-stat">{/* <Stats /> */}</div>
                <ul
                    className={`hits-list ${
                        hits.length < 3 ? 'hits-list-small' : ''
                    }`}
                >
                    {hits.slice(0,6).map(hit => {
                        if (hit._rankingInfo) {
                            return (
                                <li
                                    key={hit.objectID}
                                    className={`hit-list ${
                                        hit._rankingInfo.promoted
                                            ? 'promoted'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setProduct(hit);
                                        setModal(true);
                                        setShowFederatedSearch(false);
                                        setSearchVisible(true);
                                    }}
                                >
                                    <div className="image-wrapper">
                                        <img
                                            src={
                                                hit.images
                                                    ? hit.images[0].url
                                                    : 'https://images.unsplash.com/photo-1523878288860-7ad281611901?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGV4dHVyZXxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
                                            }
                                            alt=""
                                        />
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
                            );
                        } else {
                            return '';
                        }
                    })}
                </ul>
            </div>
        );
    }
    if (hits.length === 0) {
        return <p>No results</p>;
    }
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
