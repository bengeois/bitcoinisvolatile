// Make sure to export this to use later on
export const formatPrice = (price) => {
  const formatConfig = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return formatConfig.format(price);
};
