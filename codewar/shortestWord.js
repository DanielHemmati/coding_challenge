// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/javascript
/**
 *
 * @param {String} s
 */
function findShort(s) {
  return s.split(" ").sort((a, b) => a.length - b.length)[0].length;
}

// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

/**
 *
 * @param {String} s
 */
function secondSolution(s) {
  return Math.min(...s.split(" ").map((item) => item.length));
  // if you want to know how does it work
  // return [...s.split(" ").map((item) => item.length)];
}

console.log(
  secondSolution("bitcoin take over the world maybe who knows perhaps")
);
