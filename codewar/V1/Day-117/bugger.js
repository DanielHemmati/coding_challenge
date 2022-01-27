// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(num) {
  if (num < 10) return 0;
  if (!Number.isInteger(num)) {
    throw new Error("first arguemet is not an integer");
  }

  let digit = num.toString();
  let multiply = [...digit].reduce((a, b) => a * parseInt(b), 1);

  // console.log(multiply);

  return persistence(multiply) + 1;
}

// console.log(persistence(13));

// this makes more sense to me
// but it didn't passed the test, i don't know why
function persistence3(number) {
  if (String(number).length === 1) return 0;

  let counter = 0;
  let numberSplit = number.toString();
  // console.log(numberSplit);

  // while (String(result).length > 1) {
  //   result = numberSplit.reduce((a, b) => a * b, 1);
  //   numberSplit = String(result).split("").map(Number);

  //   counter += 1;
  // }

  for (let i = 0; i < String(number).length; ++i) {
    if (String(number).length > 1) {
      result = [...numberSplit].reduce((a, b) => a * parseInt(b), 1);
      counter++;
    }
  }

  return counter;
}
// console.log(persistence3(333));

/* ----------------------------- other solution ----------------------------- */

/**
 *
 * @param {Number} num
 */
function second(num) {
  var times = 0;

  num = num.toString();
  // console.log(typeof num);
  while (num.length > 1) {
    times++;
    num = [...num]
      .map(Number)
      .reduce((a, b) => a * parseInt(b), 1)
      // if you don't write this teh num.length will be undefined
      .toString();
    // console.log("the legnth is " + num.length);
  }
  return times;
}

console.log(second(333));

let test = 123;
let str = test.toString();
// this is weird
let res = [...str]
  .map(Number)
  .reduce((a, b) => a * parseInt(b), 1)
  .toString();
// console.log(res.length);
// console.log(123.length);
