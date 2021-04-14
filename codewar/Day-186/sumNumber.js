/**
 *
 * @param {Number} a
 * @param {Number} b
 */
function getSum(a, b) {
  if (a === b) return a;
  let bigOne = Math.max(a, b);
  let res = 0;
  for (let i = Math.min(a, b); i <= bigOne; ++i) {
    res += i;
  }
  return res;
}

// console.log(Math.max(1, -1));
console.log(getSum(0, 3));

// with math equation
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};
