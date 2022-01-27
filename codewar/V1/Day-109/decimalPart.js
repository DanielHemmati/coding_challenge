/**
 *
 * @param {Number} n
 */
function getDecimal(n) {
  // return n - Math.floor(n); // fix me
  // return (n + "").split(".")[1]; // but we want 0.3
  return Number(Math.abs(n - Math.trunc(n))); // this one passed the test
}

console.log(getDecimal(2.3));

//------------- other solution -------------
const second = (n) => Math.abs(n % 1); // i wrote this at first but i thought it won't work
console.log(second(2.3));
