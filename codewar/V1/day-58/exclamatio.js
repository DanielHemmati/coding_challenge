// https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript

/**
 *
 * @param {String} s
 */
function remove(s) {
  return s.replace(/!$/g, "");
}

let a = "daniel hemmati!!!";
console.log(remove(a));
