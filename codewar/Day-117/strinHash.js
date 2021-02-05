// https://www.codewars.com/kata/51c7d8268a35b6b8b40002f2/train/javascript
/**
 *
 * @param {Object} pairs
 */
function solution(pairs) {
  return JSON.stringify(pairs)
    .replace(/[{} \"]/g, "")
    .replace(/\:/g, " = ")
    .toString();
}

// console.log(solution({ a: 1, b: "2" }));

/* ----------------------------- other solution ----------------------------- */

// this is good, but regex is something else
function second(paris) {
  return Object.keys(paris)
    .map((item) => item + " = " + paris[item])
    .join(",");
}

console.log(second({ a: 1, b: "2" }));
