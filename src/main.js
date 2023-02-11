import { fetchApi } from './helpers/exchange';
import { createCoins } from './helpers/components';
import './style.css';

const coinList = document.querySelector('.coin-list');
const coinTitle = document.querySelector('.coin-title');
const buttonSearch = document.querySelector('.btn-search');
const coinInput = document.querySelector('#coin-input');

const input = coinInput.value;

// buttonSearch.addEventListener('click', getBaseCoin);

fetchApi(input)
  .then((data) => {
    const arrayRates = Object.entries(data.rates);
    const arrayRatesObject = arrayRates.map((rate) => (
      { name: rate[0], value: parseFloat(rate[1]).toFixed(2) }
    ));
    createCoins(arrayRatesObject, data.base);
  });