// https://www.codewars.com/kata/5810085c533d69f4980001cf/train/javascript

/**
 *
 * @param {Number} a
 * @param {Number} b
 * @param {String} sign
 */
function calculator(a, b, sign) {
  // how about sign
  let cal = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b,
  };
  return cal[sign] === undefined ? "unknown value" : cal[sign];
}

console.log(calculator(1, 2, "+"));
