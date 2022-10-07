// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript

// i don't think it's possible to do this less than O(n)
/**
 *
 * @param {Array} arr
 */
function findOutlier(arr) {
  let odd = arr.filter((item) => item % 2 !== 0);
  let even = arr.filter((item) => item % 2 === 0);
  return odd.length === 1 ? odd[0] : even[0];
}

let a = [0, 1, 2];
