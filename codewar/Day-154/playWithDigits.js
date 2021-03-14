// https://www.codewars.com/kata/5552101f47fc5178b1000050/train/javascript

/**
 *
 * @param {Number} number
 * @param {Number} power
 */
function digPow(n, p) {
  const sum = [...String(n)].map(Number).reduce((a, b) => {
    const res = a + b ** p;
    p++;
    return res;
  }, 0);
  const k = sum / n;
  console.log(k);
  return Number.isInteger(k) ? k : -1;
}

let a = 46288;
let b = 2360688;
// console.log(b / a);
// console.log(digPow(a, 3));

/* ----------------------------- other solution ----------------------------- */

/**
 *
 * @param {Number} n
 * @param {Number} p
 */
// this is a problem basically
function secondSolution(n, p) {
  const n1 = n.toString();
  const n2 = p.toString();
  var sum = 0;
  for (let i = 0; i < n1.length; i++) {
    sum = sum + Math.pow(parseInt(n1.charAt(i)), p);
    p++;
    if (sum % n === 0) {
      return sum / n;
    }
  }
  return -1;
}

console.log(secondSolution(a, 3));
