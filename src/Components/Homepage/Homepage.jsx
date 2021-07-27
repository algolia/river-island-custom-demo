import React from 'react';

// IMPORT ASSETS
import img1 from '../../Assets/Images/img1.png';
import img2 from '../../Assets/Images/img2.png';
import img3 from '../../Assets/Images/img3.png';
import img4 from '../../Assets/Images/img4.png';
import footer from '../../Assets/Images/img5.png';

const Homepage = ({ showFederatedSearch, setShowFederatedSearch, searchVisible, men, women, boys, sale, girls }) => {
    return (
        <div
            className={`homepage-wrapper ${
                searchVisible || women || men || boys || sale || girls ? 'hidden' : 'active'
            }`}
           
        >
            {/* <div>
                <img src={headerBand} alt="home" />
            </div> */}
            <div  onClick={e => {
                if (showFederatedSearch) {
                    setShowFederatedSearch(false);
                }
            }}>
                <img src={img1} alt="home" />
            </div>
            <div>
                <img src={img2} alt="home" />
            </div>
            <div>
                <img src={img3} alt="home" />
            </div>
            <div>
                <img src={img4} alt="home" />
            </div>
            <div>
                <img src={footer} alt="home" />
            </div>
        </div>
    );
};

export default Homepage;
