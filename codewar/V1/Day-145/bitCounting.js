// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript

/**
 *
 * @param {number} n
 */
const countBits = (n) => {
  // const nBit = n.toString(2);
  // console.log(nBit);
  // return nBit.split("").filter((item) => {
  //   return Number(item === "1");
  // }).length;
  return n
    .toString(2)
    .split("")
    .filter((item) => Number(item === "1")).length;
};

const test = 123;
// console.log(test.toString(2));
// console.log((test >>> 0).toString(2));

// console.log(countBits(test));

/* ----------------------------- other solution ----------------------------- */
/**
 *
 * @param {Number} n
 */
function countBits2(n) {
  return n.toString(2).split("0").join("").length;
}
