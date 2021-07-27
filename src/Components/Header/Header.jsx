import React from 'react';

// COMPONENT IMPORT
import headerUp from '../../Assets/Images/headerUp.png';
import SelectPersona from './Persona';
import CustomSearchBox from '../Searchpage/SearchBox';
import FederatedSearch from '../Federated Search/FederatedSearch';

const Header = ({
    setSelectedOption,
    setSearchVisible,
    setWomen,
    setMen,
    setGirls,
    setBoys,
    setSale,
    showFederatedSearch,
    setShowFederatedSearch,
    searchVisible,
    setQuery,
    query,
    men,
    boys,
    girls,
    sale,
    women,
    homepage,
    setHomepage
}) => {
    // const focus = () => {
    //     const input = document.querySelector('#input-search2');
    //     input.focus();
    // };

    if(showFederatedSearch){
        document.body.classList.add('stop-scrolling')
    } else {
        document.body.classList.remove('stop-scrolling')
    }
    return (
        <header className="header" 
        onClick={() =>{
            if(showFederatedSearch){
                setShowFederatedSearch(false)
                setQuery('')
            }}
        } 
        >
            <img src={headerUp} alt="" className="headerUp" />
            <div className="header-wrapper">
                <svg
                    className="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 305.1 35.2"
                    width="164"
                    height="60"
                    onClick={() => {
                        setWomen(false);
                        setSearchVisible(false);
                        setMen(false);
                        setGirls(false);
                        setBoys(false);
                        setSale(false);
                        setQuery('');
                        setShowFederatedSearch(false);
                        setHomepage(true)
                        
                    }}
                >
                    <path d="M107.4 17.1c2.4 0 4.1-0.3 5.5-1.1 1.8-1.1 2.6-3 2.6-5.4 0-2.6-0.9-4.2-2.4-5.2 -1.3-0.9-3.1-1.3-5.8-1.3h-3.1v30.6h-5.3V0.7h9.3c3.5 0 6.4 0.4 8.9 1.9 3.8 2.5 3.9 6.4 3.9 7.3 0 4.2-2.3 7.4-6.4 8.8 -0.4 0.1-0.8 0.2-1.2 0.3l10.9 15.5h-6l-12-17.5H107.4z"></path>
                    <path d="M8.6 17.1c2.4 0 4.2-0.3 5.5-1.1 1.8-1.1 2.6-3 2.6-5.4 0-2.6-0.9-4.2-2.4-5.2C13 4.4 11.1 4 8.4 4H5.3v30.6H0V0.7h9.3c3.5 0 6.4 0.4 8.9 1.9 3.8 2.5 3.9 6.4 3.9 7.3 0 4.2-2.3 7.4-6.4 8.8 -0.4 0.1-0.8 0.2-1.2 0.3l10.9 15.5h-6l-12-17.5H8.6z"></path>
                    <rect x="29.5" y="0.7" width="5.3" height="33.9"></rect>
                    <polygon points="69.4 0.7 56.6 34.6 52.3 34.6 39.3 0.7 45.2 0.7 55.2 27.5 65.1 0.7 "></polygon>
                    <polygon points="78.8 31.3 94.2 31.3 94.2 34.6 73.4 34.6 73.4 0.7 93 0.7 93 4 78.8 4 78.8 15.3 92.4 15.3 92.4 18.6 78.8 18.6 "></polygon>
                    <rect x="146.5" y="0.7" width="5.3" height="33.9"></rect>
                    <path d="M169.7 0c2.9 0 6 0.6 8.7 1.8v4.5c-3.2-1.8-6.5-2.8-9.2-2.8 -3.4 0-5.9 1.6-5.9 4.4 0 7.5 17.3 6.2 17.3 17.5 0 5.4-4 9.8-12.2 9.8 -3.6 0-7.1-0.8-10-2.2v-4.9c2.3 2.1 6.6 3.6 10.4 3.6 4 0 7.1-1.7 7.1-5.2 0-8.1-17.3-6.6-17.3-17.8C158.6 2.6 163.7 0 169.7 0"></path>
                    <polygon points="192.2 0.7 192.2 31.3 206.7 31.3 205.4 34.6 186.8 34.6 186.8 0.7 "></polygon>
                    <path d="M217.7 22.3h11.4l-5.8-14.9L217.7 22.3zM239.7 34.6h-5.9l-3.5-9h-13.9l-3.4 9h-4.3L222 0.7h4.3L239.7 34.6z"></path>
                    <polygon points="270.8 0.7 270.8 34.6 267.2 34.6 247.8 9.3 247.8 34.6 243.7 34.6 243.7 0.7 248 0.7 266.7 25.1 266.7 0.7 "></polygon>
                    <path d="M294.5 6.1c-2.1-1.3-4.8-2-9-2h-3.4v27.1h3.4c3.8 0 6.8-0.6 9-2 3.4-2.1 4.9-6.2 4.9-11.6C299.5 12.2 297.9 8.3 294.5 6.1M300 30.8c-3 2.6-7.4 3.8-12.7 3.8h-10.4V0.7h10.4c5.3 0 9.7 1.2 12.7 3.8 3.4 3 5 7.6 5 13.2C305.1 23.2 303.4 27.9 300 30.8"></path>
                </svg>
                <ul>
                    <li
                        onClick={() => {
                            setWomen(true);
                            setSearchVisible(false);
                            setMen(false);
                            setGirls(false);
                            setBoys(false);
                            setSale(false);
                            setQuery('');
                            setShowFederatedSearch(false);
                            setHomepage(false)
                        }}
                    >
                        Women
                    </li>
                    <li
                        onClick={() => {
                            setMen(true);
                            setWomen(false);
                            setGirls(false);
                            setBoys(false);
                            setSale(false);
                            setQuery('');
                            setSearchVisible(false);
                            setShowFederatedSearch(false);
                            setHomepage(false)
                        }}
                    >
                        Men
                    </li>
                    <li
                        onClick={() => {
                            setMen(false);
                            setWomen(false);
                            setGirls(true);
                            setBoys(false);
                            setSale(false);
                            setQuery('');
                            setSearchVisible(false);
                            setShowFederatedSearch(false);
                            setHomepage(false)
                        }}
                    >
                        Girls
                    </li>
                    <li
                        onClick={() => {
                            setMen(false);
                            setWomen(false);
                            setGirls(false);
                            setBoys(true);
                            setSale(false);
                            setQuery('');
                            setSearchVisible(false);
                            setShowFederatedSearch(false);
                            setHomepage(false)
                        }}
                    >
                        Boys
                    </li>
                    {/* <li
                        onClick={() => {
                            setMen(false);
                            setWomen(false);
                            setGirls(false);
                            setBoys(false);
                            setSale(true);
                            setQuery('');
                            setSearchVisible(false);
                            setShowFederatedSearch(false);
                            setHomepage(false)
                        }}
                    >
                        Sale
                    </li> */}
                    <li>Summer Shop</li>
                    <li>Editorial</li>
                    {/* <li>
                        <SelectPersona setSelectedOption={setSelectedOption} />
                    </li> */}
                </ul>
                <div
                    className="search-wrapper"
                    onClick={(e) => {
                        console.log(e)
                        if (
                            men ||
                            women ||
                            girls ||
                            boys ||
                            sale ||
                            homepage
                        ) {
                            setShowFederatedSearch(true);
                        } 
                        if(searchVisible) {
                            setShowFederatedSearch(false);
                        }
                    }}
                >
                    <CustomSearchBox
                        query={query}
                        setQuery={setQuery}
                        setShowFederatedSearch={setShowFederatedSearch}
                        showFederatedSearch={showFederatedSearch}
                        searchVisible={searchVisible}
                        setSearchVisible={setSearchVisible}
                        style={{ width: '350px' }}
                        setMen={setMen}
                        setHomepage={setHomepage}
                        setSale={setSale}
                        setBoys={setBoys}
                        setGirls={setGirls}
                        setHomepage={setHomepage}
                        setWomen={setWomen}
                    />
             
                </div>
            </div>
        </header>
    );
};

export default Header;
