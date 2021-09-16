import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import alertSound from '../../assets/alert.mp3';
import useGetCryptoData from '../../hooks/useGetCryptoData';
import { formatPrice } from '../../utils/formatPrice';
import './CryptoTracker.css';

const CryptoTracker = ({ cryptoName }) => {
  const { data, isLoading } = useGetCryptoData(cryptoName, {
    refetchInterval: 5000
  });
  const [active, setActive] = useState(false);
  const [targetPrice, setTargetPrice] = useState('');
  const [oldPrice, setOldPrice] = useState('');
  const [play] = useSound(alertSound);

  useEffect(() => {
    if (!active) {
      setOldPrice(data?.market_data?.current_price?.usd);
      return;
    }

    if (
      data?.market_data?.current_price?.usd <= targetPrice &&
      oldPrice > targetPrice
    ) {
      play();
    } else if (
      data?.market_data?.current_price?.usd >= targetPrice &&
      oldPrice < targetPrice
    ) {
      play();
    }
    setOldPrice(data?.market_data?.current_price?.usd);
  }, [active, data, oldPrice, play, targetPrice]);

  if (isLoading) return null;

  const { image, name, market_data: marketData } = data;

  return (
    <>
      <div className="crypto-top-infos">
        <img src={image?.large} alt={`${name} logo`} />
        <h3 className="crypto-name">{name}</h3>
      </div>
      <h4 className="crypto-price">
        {formatPrice(marketData?.current_price?.usd)}
      </h4>
      <div className="crypto-alert-form">
        <form className="form">
          <input
            type="number"
            className="form__field"
            placeholder="Target price"
            value={targetPrice}
            onChange={(e) => {
              setTargetPrice(e.target.value);
            }}
          />
          <button
            type="button"
            className={`btn btn--primary btn--inside ${
              active ? 'btn-deactivate' : 'btn-activate'
            }`}
            onClick={() => setActive(!active)}
          >
            {active ? 'Deactivate' : 'Activate'}
          </button>
        </form>
      </div>
    </>
  );
};

export default CryptoTracker;
