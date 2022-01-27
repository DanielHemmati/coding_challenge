

/**
 * 
 * @param {Array} array 
 */
function squareOrSquareRoot(array) {
  return array.map(x => Math.sqrt(x) % 1 === 0 ? Math.sqrt(x) : Math.pow(x, 2))
}
// 
// console.log(Math.sqrt(4) % 1 === 0)
var input = [ 4, 3, 9, 7, 2, 1 ];

console.log(squareOrSquareRoot(input))




