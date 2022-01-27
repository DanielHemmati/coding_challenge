// https://www.codewars.com/kata/56453a12fcee9a6c4700009c/train/javascript
/**
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} margin
 */
function closeCompare(a, b, margin) {
  var margin = margin || 0;
  if (margin >= Math.abs(a - b)) return 0;
  if (a < b) return -1;
  return 1;
}

// console.log(Math.sign(4 - 3));
// console.log(Math.sign(3 - 6));
// console.log(3 - 4);

/* ----------------------------- other solution ----------------------------- */
/**
 *
 * @param {Number} a
 * @param {Number} b
 * @param {Number} margin
 */
function first(a, b, margin) {
  return Math.abs(a - b) <= margin ? 0 : Math.sign(a - b);
}
// that math.sgin => love it
