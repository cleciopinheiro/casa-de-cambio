export function fetchApi(baseCoin) {
  return fetch(`https://api.exchangerate.host/latest?base=${baseCoin}`)
    .then((response) => response.json());
}
