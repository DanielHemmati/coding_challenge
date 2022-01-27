/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function arrayDiff(a, b) {
  return a.filter((item, index) => item !== b) || [];
}

// console.log(arrayDiff([], [3]));
// console.log(arrayDiff([1, 8, 2], []));
// console.log([1, 2, "daniel"].indexOf("daniel") !== );
// console.log(arrayDiff([5, 19, -11], [-11, 19, 5]));

/* ----------------------------- other solution ----------------------------- */
// fuck the last minute i just thought about this, NOOOOOO
// i had the idea but i was lazy
/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function second(a, b) {
  let res = "test";
  console.log(res.length);
  return a.filter((item) => !b.includes(item));
}
/* ------------------------------------ } ----------------------------------- */

console.log(second([], [3]));
console.log(second([1, 8, 2], []));
console.log(second([5, 19, -11], [-11, 19, 5]));
