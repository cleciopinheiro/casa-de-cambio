const coinList = document.querySelector('.coin-list');
const coinTitle = document.querySelector('.coin-title');

export function createListCoin(name, value) {
  const coinElement = document.createElement('li');
  coinElement.classList.add('coin');
  coinElement.innerHTML = `${name} <span>${value}</span>`;
  return coinElement;
}

export function createCoins(coins, baseCoin) {
  coinTitle.innerHTML = `Valores referente a 1 ${baseCoin}`;
  coinList.innerHTML = '';

  coins.forEach((coin) => {
    const element = createListCoin(coin.name, coin.value);
    coinList.appendChild(element);
  });
}