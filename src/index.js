module.exports = function towelSort (matrix) {
  let newArray = [];
  if(typeof matrix == 'object' && matrix.length > 0) {
    for(let i=0; i <= matrix.length; i++) {
      if (i % 2 == 0) {
        if (typeof matrix[i] == 'object' && matrix[i].length > 0) {
          newArray = newArray.concat(matrix[i]);
        }
      } else {
        if (typeof matrix[i] == 'object' && matrix[i].length > 0) {
          newArray = newArray.concat(matrix[i].reverse());
        }
      }
    }
  }
  return newArray;
}
