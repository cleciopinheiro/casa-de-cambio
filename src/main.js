import Swal from 'sweetalert2';
import { fetchApi } from './helpers/exchange';
import { createCoins } from './helpers/components';
import './style.css';
import '@sweetalert2/theme-dark/dark.min.css';

const buttonSearch = document.querySelector('.btn-search');
const coinInput = document.querySelector('#coin-input');

buttonSearch.addEventListener('click', (event) => {
  event.preventDefault();

  const input = coinInput.value;

  if (!input) {
    Swal.fire({
      title: 'Erro',
      text: 'Você precisa digitar uma moeda!',
      icon: 'error',
    });
    return;
  }
  
  fetchApi(input)
    .then((data) => {
      const arrayRates = Object.entries(data.rates);
      const arrayRatesObject = arrayRates.map((rate) => (
        { name: rate[0], value: parseFloat(rate[1]).toFixed(2) }
      ));
      createCoins(arrayRatesObject, data.base);
    })
    .catch((error) => {
      Swal.fire({
        title: 'Erro',
        text: error.message,
        icon: 'error',
      });
    });
});