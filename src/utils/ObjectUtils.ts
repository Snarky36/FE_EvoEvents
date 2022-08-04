export const filterIndexedEnumsKeys = (obj) => {
  return Object.keys(obj).filter((currentKey) => isNaN(parseInt(currentKey)));
};
