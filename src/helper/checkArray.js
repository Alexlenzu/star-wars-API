export const checkArray = (arr) => {
  const filteredArray = arr.filter((v) => v !== 'unknown');
  return filteredArray.join(' | ');
};
