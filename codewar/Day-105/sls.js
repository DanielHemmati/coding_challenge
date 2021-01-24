// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript

/**
 *
 * @param {String} a
 * @param {String} b
 */
function solution(a, b) {
  return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`;
}

console.log(solution("soon", "me"));

/* ----------------------------- other solution ----------------------------- */

const better = (a, b) => (a.length > b.length ? b + a + b : a + b + a);
