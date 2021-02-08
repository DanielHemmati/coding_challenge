// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
/**
 *
 * @param {String} str
 */
function removeChar(str) {
  let strArray = str.split("");
  strArray.pop();
  strArray.shift();
  return strArray.join("");
}

console.log(removeChar("daniel"));

/* ----------------------------- second solution ---------------------------- */

/**
 *
 * @param {String} str
 */
function second(str) {
  return str.slice(1, -1);
}

console.log(second("daniel"));
