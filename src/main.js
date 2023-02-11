import './style.css';
import { fetchApi } from './helpers/exchange';
import { createCoins } from './helpers/components';

const buttonSearch = document.querySelector('.btn-search');
const coinInput = document.querySelector('#coin-input');

createCoins([{ name: 'AUD',  value: 14.567 }], 'USD');

