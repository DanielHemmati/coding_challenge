// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

/**
 *
 * @param {String} str
 */
function getCount(str) {
  let m = str.match(/[aeiou]/g);
  // check for mull first
  return m === null ? 0 : m.length;
}

console.log(getCount("my pxy"));
