// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

/**
 *
 * @param {Number} num
 */
function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((item) => Math.pow(item, 2))
      .join("")
  );
}

// let n = 123;
// console.log(n.toString()[0]);

console.log(squareDigits(123));
// let test = 132 + "";
// console.log(test);
let test = "123";
console.log(+test);
