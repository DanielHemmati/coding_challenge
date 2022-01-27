// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

/**
 *
 * @param {Number} number
 */
function solution(number) {
  // this is my solution
  let listNumber = Array.from({ length: number }, (_, i) => i);
  let divisible = listNumber.filter((item) => item % 5 === 0 || item % 3 === 0);
  return divisible.reduce((a, b) => a + b, 0);
}

// console.log(solution(10));

/* ----------------------------- second solution ---------------------------- */

/**
 *
 * @param {Number} number
 */
function second(number) {
  // less complicated
  let sum = 0;
  for (let i = 0; i < number; ++i) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
// console.log(second(10));

// or with Array.from()
console.log([...new Array(10).keys(10)]);
