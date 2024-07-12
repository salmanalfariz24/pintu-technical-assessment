const hasOwnProperty = (obj: any, property: string): boolean => {
  return Object.prototype.hasOwnProperty.call(obj, property);
};

const template = (temp: string, data: any): string => {
  if (!temp) {
    return '';
  }

  const pattern = /{\s*(\w+?)\s*}/g;
  return temp.replace(pattern, (_, token) => {
    return hasOwnProperty(data, token) ? `${data[token]}` : '';
  });
};

export default template;
