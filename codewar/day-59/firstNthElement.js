// https://www.codewars.com/kata/545afd0761aa4c3055001386/train/javascript

/**
 *
 * @param {Array} arr
 * @param {Number} n
 */
function take(arr, n) {
  return arr.slice(0, n);
}

console.log(take([1, 2, 3, 4], 3));
