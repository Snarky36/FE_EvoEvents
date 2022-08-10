export const filterIndexedEnumsKeys = (obj) => {
  return Object.keys(obj).filter((currentKey) => isNaN(parseInt(currentKey)));
};

export const isEmptyObject = (obj) => {
  if (typeof obj !== 'object') 
    return false;
  return Object.values(obj).length === 0;
}
