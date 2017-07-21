import './index.css';

import numeral from 'numeral';

const currencyVal = numeral(50).format('$0,0.00');
console.log(`Testing numeral library and ES6 template string ${currencyVal}`);
