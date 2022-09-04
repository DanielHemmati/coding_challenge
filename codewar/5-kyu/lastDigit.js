// https://www.codewars.com/kata/5511b2f550906349a70004e1/solutions 
// read later
// i couldn't solve it. but i learn that there is pattern when u raise
// the power of a number. and u can use that
// when u raies 5 to any number the last digita will always end up in 5
// and when u raise 9 to any power the last digita is always rotate between 
// 1 and 9. so u can use that
var obj = {
  0: [0, 0, 0, 0],
  1: [1, 1, 1, 1],
  2: [6, 2, 4, 8],
  3: [1, 3, 9, 7],
  4: [6, 4, 6, 4],
  5: [5, 5, 5, 5],
  6: [6, 6, 6, 6],
  7: [1, 7, 9, 3],
  8: [6, 8, 4, 2],
  9: [1, 9, 1, 9],
};
/**
 *
 * @param {string} str1
 * @param {string} str2
 * @returns
 */
const lastDigit = function (str1, str2) {
  if (parseInt(str2) === 0) return 1;

  let seed = parseInt(str1.slice(-1)) % 10;
  console.log(seed);
};

let a = "4";
let b = "2";
console.log(lastDigit(a, b));
