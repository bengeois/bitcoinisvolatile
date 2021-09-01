export const formatPlusMinus = (priceChange) => {
  const isPositive = Math.sign(priceChange) >= 0;

  return (
    <span className={`${isPositive ? 'positive' : 'negative'}`}>
      {`${isPositive ? '+' : ''}${priceChange.toFixed(2)}%`}
    </span>
  );
};
