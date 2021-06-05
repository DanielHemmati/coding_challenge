// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript
/**
 *
 * @param {Array} arr
 */
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i - 1] + 1 !== arr[i]) return arr[i];
  }
  return null;
}
let s = [1, 2, 3];
let d = [1, 2, 4];
// console.log(firstNonConsecutive(d));

/* ----------------------------------- or ----------------------------------- */
/**
 *
 * @param {Array} arr
 */
function withFind(arr) {
  const result = arr.find((element, i) => {
    if (i < 1) {
      console.log(i);
      return false;
    }
    if (element - arr[i - 1] !== 1) {
      return true;
    }
  });
  if (result !== undefined) {
    return result;
  }
  return null;
}
// console.log(withFind(d));

/* ------------------------ this find is much better ------------------------ */
/**
 *
 * @param {Array} arr
 */
function firstOne(arr) {
  // this one is much neater
  let res = arr.find((value, index) => value !== arr[0] + index);
  return res;
}

console.log(firstOne(d));
