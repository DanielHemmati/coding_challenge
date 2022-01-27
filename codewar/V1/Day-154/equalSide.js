// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

/**
 *
 * @param {Array} arr
 */
// this is hard
// over all i didn't like this problem
function findEvenIndex(arr) {
  if (arr.length === 1) return 0;
  for (let i = 1; i < arr.length - 1; ++i) {
    const leftSum = arr.slice(0, i).reduce((a, b) => a + b, 0);
    const rightSum = arr.slice(i + 1).reduce((a, b) => a + b, 0);
    console.log("sum of the left side " + leftSum);
    console.log("sum of the right side " + rightSum);
    if (leftSum === rightSum) return i;
  }
  return -1;
}

let a = [0, 8];
let c = [20, 10, -80, 10, 10, 15, 35];
// console.log(findEvenIndex(c));

const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0);
const findEvenIndex2 = (array) =>
  array.findIndex((_, i) => sum(array, 0, i) === sum(array, i + 1));

// let b = [1, 2, 3, 4, 20];
// let res = b.findIndex((a, i) => a === 20);
// console.log(res);

/**
 *
 * @param {Array} arr
 */
function secondSolution(arr) {
  return arr.findIndex(
    (_, i) =>
      arr.slice(0, i).reduce((a, b) => a + b, 0) ===
      arr.slice(i + 1).reduce((a, b) => a + b, 0)
  );
}

// console.log(secondSolution(a));

/* ----------------------------- other solution ----------------------------- */

/**
 *
 * @param {Array} arr
 */
// this solution is much better
function thirdSolution(arr) {
  let left = 0;
  let right = arr.reduce((a, b) => a + b, 0);
  for (let i = 0; i < arr.length; i++) {
    right -= arr[i];
    if (right === left) return i;
    left += arr[i];
  }
  return -1;
}

console.log(thirdSolution(a));
