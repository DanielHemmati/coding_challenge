// https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript
/**
 *
 * @param {Array} arr
 */
function findUniq(arr) {
  let res = arr.sort();
  console.log(res);
  if (res[0] === res[1]) {
    return res[res.length - 1];
  }
  return res[0];
  // return arr.filter((item, index, arr) => arr.indexOf(item) === index);
}

console.log(findUniq([0, 1, 0, 0, 0]));
console.log(findUniq([1, 1, 2, 1, 1]));
