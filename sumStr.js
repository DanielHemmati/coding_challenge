// https://www.codewars.com/kata/5966e33c4e686b508700002d/train/javascript
/**
 *
 * @param {String} a
 * @param {String} b
 */
function sumStr(a, b) {
  // return String(Number(a) + Number(b));
  // return String(+a + +b);
  return +a + +b + "";
}

console.log(typeof sumStr("3", "2"));
