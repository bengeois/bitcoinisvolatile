import React, { useState } from 'react';
import useGetCryptoData from '../../hooks/useGetCryptoData';
import { formatPlusMinus } from '../../utils/formatPlusMinus';
import { formatPrice } from '../../utils/formatPrice';
import ChartData from '../ChartData/ChartData';
import './CryptoTracker.css';

const CryptoTracker = ({ cryptoName }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { data, isLoading } = useGetCryptoData(cryptoName, {
    refetchInterval: 60000,
    staleTime: 60000
  });

  if (isLoading) return null;

  const { image, name, market_data: marketData } = data;

  const onCardClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {!isExpanded && <button onClick={onCardClick} className="hitzone" />}
      <div className="card-inner">
        {isExpanded && (
          <button className="close" onClick={() => setIsExpanded(false)}>
            Close
          </button>
        )}
        <div className="top-data">
          <img src={image?.large} alt={`${name} logo`} />
          <h3 className="crypto-name">{name}</h3>
          <h4 className="crypto-price">
            {formatPrice(marketData?.current_price?.usd)}
            {formatPlusMinus(marketData?.price_change_percentage_24h)}
          </h4>
        </div>
        <ChartData isExpanded={isExpanded} cryptoName={cryptoName} />
      </div>
    </div>
  );
};

export default CryptoTracker;
