// https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript
/**
 *
 * @param {String} numbers
 */
function iqTest(numbers) {
  let even = numbers
    .split(" ")
    .filter((item) => item % 2 === 0)
    .join("");
  let odd = numbers
    .split(" ")
    .filter((item) => item % 2 !== 0)
    .join("");

  return even.length === 1
    ? numbers.split(" ").indexOf(even) + 1
    : numbers.split(" ").indexOf(odd) + 1;
}

// console.log(iqTest(input));

// let even = input.split(" ").filter((item) => item % 2 === 0);
// console.log(even);

/**
 *
 * @param {String} numbers
 */
function secondTry(numbers) {
  return (
    numbers.split(" ").findIndex((x, index, arr) => {
      return (
        arr.filter((y) => {
          return y % 2 === x % 2;
        }).length === 1
      );
    }) + 1
  );
}
// console.log(secondTry("2 4 7 8 10"));

/* ----------------------------- other solution ----------------------------- */
/**
 *
 * @param {String} numbers
 */
// LOVE this solution
function iqTest(numbers) {
  let nums = numbers.split(" ").map((x) => x % 2);
  let sum = nums.reduce((a, b) => a + b);
  let target = sum > 1 ? 0 : 1;

  return nums.indexOf(target) + 1;
}

let numbers = "2 4 7 8 10";
let input = "1 2 1 1";
console.log(secondSoultion(input));
