/**
 *
 * @param {Number} n
 * @returns {Array}
 */
function digitize(n) {
  return [...String(n)].reverse().map(Number);
}

let input = 35231;
console.log(digitize(input));
