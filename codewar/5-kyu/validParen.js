// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

/**
 *
 * @param {String} parens
 * @returns Boolean
 */
// for some reason i couldn't solve this 🙃
function validParentheses(parens) {
  let regex = /\(\)/g;
  while (regex.test(parens)) {
    parens = parens.replace(regex, "");
  }

  return !parens;
}

// let a = ")(()))".split("()");
// let b = a.join("").split("()")
// let c = b.join("").split("()");
// console.log(c)

// let input = "((()))";
// let wrong = "()))";
// console.log(validParentheses(input));

// let test = "())(";
// console.log(new Set(test));

// other solution
// i had one solution like this but it didn't worked
// and with this solution the order of paren are not important
// really clever
function second(parens) {
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == "(") n++;
    if (parens[i] == ")") n--;
    if (n < 0) return false;
  }
  return n == 0;
}

// console.log(second(input))

/**
 *
 * @param {String} parens
 * it's like the first one, a little bit simpler
 */
function third(parens) {
  while (parens.indexOf("()") != -1) {
    parens = parens.replace("()", "");
  }

  return !parens.length ? true : false;
  // return !parens.length; // the sol was like this
  // but i like the above one
}

// console.log(third(inputj));

/**
 *
 * @param {String} parens
 * @returns
 */
// i really like this
function fourth(parens) {
  let stack = [];
  let i;

  for (i = 0; i < parens.length; i++) {
    if (parens[i] === "(") {
      stack.push(parens[i]);
      // stack.pop() will remove from array. i thought it won't work it won't mutate the array in the if statement
    } else if ("(" !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
}

let input = "((()))";
let wrong = "()))";

/**
 *
 * @param {String} paren
 */
// this is way simpler
function fifth(paren) {
  while (paren.includes("()")) {
    paren = paren.replace("()", "");
  }

  return paren.length === 0;
}

// console.log(fifth(input));

/**
 *
 * @param {String} parent
 */
function sixth(parens) {
  return [...parens].reduce((a, b) => (a + b).replace("()", ""), "").length === 0;
}
console.log(sixth(input));
