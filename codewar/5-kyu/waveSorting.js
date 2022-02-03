// https://www.codewars.com/kata/596f28fd9be8ebe6ec0000c1/train/javascript

Array.prototype.swap = function (x, y) {
  let tmp = this[x];
  this[x] = this[y];
  this[y] = tmp;
  return this;
};

/**
 *
 * @param {Array} arr
 */
function waveSort(arr) {
  arr.sort((a,b) => a - b).filter(Boolean);
  for (let i = 1; i < arr.length; i += 2) {
    [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
  }
}

let arr = [1, 2, 34, 4, 5, 5, 5, 65, 6, 65, 5454, 4];
// console.log(arr.sort((a, b) => b - a));
console.log(waveSort(arr))
// console.log(arr.swap(1, 2));
let a = [2, undefined, 1];
a.filter(e => e!== undefined).sort((b, a) => b - a);
console.log(a)
