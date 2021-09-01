import { useQuery } from 'react-query';

const useGetCryptoData = (cryptoName, options) => {
  return useQuery(
    `${cryptoName}-card`,
    async () => {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}`
      );
      return await response.json();
    },
    options
  );
};

export default useGetCryptoData;
