export function fetchApi(baseCoin) {
  return fetch(`https://api.exchangerate.host/latest?base=${baseCoin}`)
    .then((response) => response.json())
    .then((dados) => {
      if (dados.base !== baseCoin) {
        throw new Error('Moeda não existe');
      }

      return dados;
    });
}
