// https://www.codewars.com/kata/5748838ce2fab90b86001b1a/train/javascript

/**
 *
 * @param {Number} A
 */
// function squareArea(A) {}
const squareArea = (A) => {
  // Number((((2 * A) / 3.1416) ** 2).toFixed(2));
  return +(((2 * A) / 3.1416) ** 2).toFixed(2);
};

console.log(squareArea(4));
