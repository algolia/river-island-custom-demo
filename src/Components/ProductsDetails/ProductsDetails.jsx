import React from 'react';

import { Configure } from 'react-instantsearch-dom';

// IMPORT COMPONENTS
import { CustomHitsModal } from '../Searchpage/Hits';

// IMPORT ASSETS
import pdp from '../../Assets/Images/pdp.png';

const ProductDetails = ({ product, setModal }) => {
    // const searchClient = algoliasearch(window.appID, window.key);

    if (product) {
        setModal(true);
        return (
            <div className="modal-inner-wrapper">
                <p
                    className="close-modal"
                    onClick={() => {
                        setModal(false);
                    }}
                >
                    X
                </p>
                <div className="modal-detail">
                    <div className="product-side">
                        <div className="modal-images">
                            <img src={product.images[0].url} alt="" />
                        </div>
                    </div>
                    <div className="fake-filters">
                        <div className="modal-infos">
                            <h3>{product.title}</h3>
                            <p>${product.homeCost}</p>
                            <p>{product.description}</p>
                            <p className="btn-modal">Buy me</p>
                        </div>
                        <img src={pdp} alt="" />
                    </div>
                </div>
                <div className="recommand-side">
                    <div>
                        <h3>Recommandations</h3>
                    </div>
                    <div className="modal-hits">
                        <Configure filters="breadcrumbs.lvl0:men" hitsPerPage={8} />
                        <CustomHitsModal />
                    </div>
                    <div>
                        <h3>Bought together</h3>
                    </div>
                    <div className="modal-hits">
                        <Configure
                            hitsPerPage={8}
                            filters="breadcrumbs.lvl0:girls"
                        />
                        <CustomHitsModal />
                    </div>
                </div>
            </div>
        );
    }
};

export default ProductDetails;
