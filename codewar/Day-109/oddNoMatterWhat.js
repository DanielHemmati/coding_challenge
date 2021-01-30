// https://www.codewars.com/kata/5f882dcc272e7a00287743f5/train/javascript
/**
 *
 * @param {Number} n
 */
// function alwaysOdd(n) {
//   return n % 2 ? n : n + 1;
// }

// but without space in codewar
const alwaysOdd = (n) => (n % 2 ? n : n - 1);
console.log(alwaysOdd(2));
