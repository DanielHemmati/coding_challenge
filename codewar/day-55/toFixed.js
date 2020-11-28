// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

/**
 *
 * @param {Array} arr
 * @param {Number} n
 */
function howManySmaller(arr, n) {
  return arr.filter((item) => +item.toFixed(2) < n).length;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
console.log(howManySmaller([1.1888, 1.1868, 1.1838], 1.19));

// let a = 111;
// let res = [];

// // console.log(typeof a.toFixed());
// console.log(res.push(a.toFixed()));
// console.log(res);
