// https://www.codewars.com/kata/52de553ebb55d1fca3000371/train/javascript

// read this to understand where the sum equation comes from
// https://www.math-only-math.com/sum-of-the-first-n-terms-of-an-arithmetic-progression.html
const findMissing = function (list) {
  let length = list.length;
//   length + 1 b/c one element from the list will be missing.
  let sumOfList = (length + 1) * (list[0] + list[list.length - 1]) / 2;
  let sumOriginalList = list.reduce((a,b) => a + b, 0);
  return sumOfList - sumOriginalList;
}


// let a = [1, 3, 4];
// let b = [1, 3, 5, 7, 11];
// console.log(findMissing(b));