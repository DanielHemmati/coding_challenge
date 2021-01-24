// https://www.codewars.com/kata/56a25ba95df27b7743000016/train/javascript

/**
 *
 * @param {Number} code
 */
function validateCode(code) {
  return /^(1|2|3)\d/g.test(code);
}

console.log(validateCode("test"));
