export const toUSD = (num: number, maximumFractionDigits = 0) => {
  try {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: maximumFractionDigits,
    });
    return formatter.format(num);
  } catch (error) {
    return '$0.00';
  }
};

export const toDigits = (num: number) => {
  try {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'decimal',
      maximumFractionDigits: 0,
    });
    return formatter.format(num);
  } catch (error) {
    return '0';
  }
};
