// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
/**
 *
 * @param {String} numbers
 */
function highAndLow(numbers) {
  let res = numbers.split(" ").map(Number);
  let bigOne = Math.max(...res);
  let smallOne = Math.min(...res);
  return `${bigOne} ${smallOne}`;
}

console.log(highAndLow("1 2 3 4"));
