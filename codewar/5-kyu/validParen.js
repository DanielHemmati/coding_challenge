// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

/**
 *
 * @param {String} parens
 * @returns Boolean
 */
// for some reason i couldn't solve this 🙃
function validParentheses(parens) {
  let regex = /\(\)/g
  while (regex.test(parens)) {
    parens = parens.replace(regex, "");
  }

  return !parens
}

// let a = ")(()))".split("()");
// let b = a.join("").split("()")
// let c = b.join("").split("()");
// console.log(c)

let input = "((()))";
console.log(validParentheses(input));

// let test = "())(";
// console.log(new Set(test));
