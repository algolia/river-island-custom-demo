import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// CHANGE ME IF USING NEW INDEX
window.appID = 'RSBCBF0EG8';
window.key = 'e740caae53c72e09463a1117854491d5';
window.index = 'riverIsland_customDemo_products';

// SORTBY
window.index_new = 'riverIsland_customDemo_products_price_new';
window.index_asc = 'riverIsland_customDemo_products_price_asc';
window.index_desc = 'riverIsland_customDemo_products_price_desc';

// QUERY SUGG
window.indexSugg = 'riverIsland_customDemo_products';

ReactDOM.render(<App />, document.getElementById('root'));
