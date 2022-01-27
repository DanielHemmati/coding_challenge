// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
/**
 *
 * @param {Array} arr
 * @param {Number} k
 */
function longestConsec(arr, k) {
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    let test = arr.slice(i, k + i);
    // res.push();
    console.log(test);
  }
  return res;
}

let a = ["zone", "abigail", "theta", "form", "libe", "zas", "hey"];
// let res = a.slice(3, 6);
// console.log(res);
// console.log(a);
console.log(longestConsec(a, 3));
