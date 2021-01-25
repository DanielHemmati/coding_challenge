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

// console.log(highAndLow("1 2 3 4"));

/* ----------------------------- other solution ----------------------------- */

/**
 *
 * @param {String} numbers
 */
function second(numbers) {
  numbers = numbers.split(" ");
  console.log(typeof `${Math.max(...numbers)}`);
  console.log(`${Math.max(...numbers)}`);
}

console.log(second("1 2 3 4 5"));
