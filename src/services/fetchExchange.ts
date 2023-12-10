const fetchExchange = async () => {
  const exchangeApi = await fetch(
    'https://economia.awesomeapi.com.br/json/all',
  ).then((response) => response.json());
  return exchangeApi;
};

export default fetchExchange;
