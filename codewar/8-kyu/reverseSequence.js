// /https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript

const range = (start, end) => {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
};
// const range = (start, end) =>
  // Array.from({ length: end - start + 1 }, (_, i) => start + 1);

/**
 *
 * @param {Number} n
 * @returns
 */
const reverseSeq = (n) => {
  return range(1, n).reverse();
};

// const a = reverseSeq(5);
// console.log(a);

// second solution
function secondSol(n) {
  return Array.fill(0).map((e, i) => n - i);
}
