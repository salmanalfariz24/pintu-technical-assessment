const _parseInt = (str: string, rdx?: number): number => {
  const radix = rdx || 10;
  const clean = str.replace(/\s+/g, '').replace(/\D/g, '');
  const parse = parseInt(clean, radix);
  return isNaN(parse) ? 0 : parse;
};

const _parseFloat = (str: string): number => {
  try {
    if (str.includes('.')) {
      const [value] = str.split('.');
      return _parseInt(value);
    }
    return _parseInt(str);
  } catch (error) {
    return 0;
  }
};

const strconv = {
  ParseInt: _parseInt,
  ParseFloat: _parseFloat,
};

export default strconv;
