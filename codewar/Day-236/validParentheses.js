// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

/**
 *
 * @param {String} parens
 * @returns {String}
 */
function validParentheses(parens) {
  return [...parens].filter((x) => x === ")").length ===
    [...parens].filter((x) => x === "(").length
    ? true
    : false;
}

/**
 *
 * @param {String} par
 */
function test(parens) {
  // if (parens.length === 1) return false;

  // this is critical but i don't get it
  const limit = parens.length / 2;

  for (let i = 0; i <= limit; ++i) {
    console.log(parens);
    parens = parens.replace("()", "");
  }

  return parens === "";
}

let a = ")(()))";
let b = "(())((()())())";
let c = "((((((((";
// console.log(b.length);
// console.log(test(b));
/**
 *
 * @param {String} par
 */
// fuck yeah hajit hal kard
function withRegex(par) {
  const regex = /\(\)/g;
  if (regex.test(par) === true) {
    console.log(par);
    return withRegex(par.replace(regex, ""));
  } else {
    return par === "";
  }
}

console.log(withRegex(b));
