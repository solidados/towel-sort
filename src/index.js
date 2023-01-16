
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  return matrix.reduce((acc, value, index) => {
    !(index % 2) ? acc.push(...value) : acc.push(...value.reverse());
    return acc;
  }, []);
};
