// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
// test was not correct

/**
 *
 * @param {String} str
 */
function swapStr(str) {
  return (
    str.substring(str.length - 1) +
    str.substring(1, str.length - 1) +
    str.substring(0, 1) + "ay"
  );
}

/**
 *
 * @param {String} str
 */
function pigIt(str) {
  let strArray = str.split(" ");
  let firstToLast = [];
  for (let i = 0; i < strArray.length; ++i) {
    firstToLast.push(swapStr(strArray[i]));
  }
  return firstToLast.join(" ");
}

let b = "This is my substring";
      // shiTay siay ymay gubstrinsay
console.log(pigIt(b));
// console.log(swapStr("string"));