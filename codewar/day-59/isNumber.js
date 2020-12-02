// https://www.codewars.com/kata/57126304cdbf63c6770012bd/train/javascript

/**
 *
 * @param {String} s
 */
function isDigit(s) {
  // this is much better for me
  if (typeof s !== "string") return false;
  return !isNaN(s) && !isNaN(parseFloat(s));
}

let a = "123";
// console.log(!isNaN(a));
// console.log(parseInt(a));

// console.log(parseFloat("   sadf 123213   "));
// console.log(!isNaN("  sdfsdf 123213   "));

// this doesn't make sense
console.log(Number("     1 23    ") === parseFloat("     1 23    "));

// console.log(isDigit("s123"));
