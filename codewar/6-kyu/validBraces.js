/**
 *
 * @param {string} braces
 */
function validBraces(braces) {
  let paren = 0;
  let curly = 0;
  let bracket = 0;
  for (let i = 0; i < braces.length; i++) {
    if (braces[i] === ")") paren++;
    if (braces[i] === "(") paren--;
    if (braces[i] === "]") bracket++;
    if (braces[i] === "[") bracket--;
    if (braces[i] === "}") curly++;
    if (braces[i] === "{") curly--;
    if (paren < 0 || bracket < 0 || curly < 0) return false;
  }

  return paren + bracket + curly === 0 ? true : false;
}

let a = "()";
let b = "{}({})[]";
let c = "(}";
let d = "[(])"; // for this it won't work, so i am going to use regex
console.log(validBraces(a))

/**
 *
 * @param {string} braces
 */
function validBraces2(braces) {
  let braceRegex = /\(\)/g;
  let curlRegex = /\{\}/g;
  let bracketRegex = /\[\]/g;
  while (
    braceRegex.test(braces) ||
    curlRegex.test(braces) ||
    bracketRegex.test(braces)
  ) {
    // u can also put this in one line
    braces = braces.replace(braceRegex, "");
    braces = braces.replace(curlRegex, "");
    braces = braces.replace(bracketRegex, "");
  }

  return !braces;
}

let aa = "()";
let ba = "{}({})[]";
let ca = "(}";
let da = "[(])"; // for this it won't work, so i am going to use regex
// console.log(validBraces2(ba))

// let braceRegex = /\(\)/g;
// console.log(aa.replace(braceRegex, ''));
