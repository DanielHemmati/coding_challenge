// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

/**
 *
 * @param {Array} a
 * @param {Array} b
 */
// way more tricky in js
function comp(a, b) {
  if (a === null || b === null) {
    return false;
  }

  let res = [];
  for (let i = 0; i < a.length; ++i) {
    if (b.indexOf(a[i] ** 2) > -1) {
      res.push(a[i] ** 2);
    }
  }

  return res.reduce((a, b) => a + b, 0) === b.reduce((a, b) => a + b, 0)
    ? true
    : false;
}

let a = [4, 4, 11];
let b = [31, 1, 121];
console.log(comp(a, b));

// solution
/**
 *
 * @param {Array} a
 * @param {Array} b
 */
function second(a, b) {
  if (a === null || b === null) {
    return false;
  }
  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  // nice
  return a.map((x) => x ** 2).every((item, index) => item === b[index]);
}

let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
console.log(second(a1, a2));
