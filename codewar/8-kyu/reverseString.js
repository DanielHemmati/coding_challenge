// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
// meh i didn't like it that much
/**
 *
 * @param {string} str
 * @returns
 */
function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

let a = "hello";
let b = "The quick brown fox jumps over the lazy dog.";

console.log(reverseWords(b))

// test

/**
 * 
 * @param {string} word 
 * O(n**2) complexity
 */
function solution2(word) {
  let result = ""
  for (const c of word) {
    result = c + result
  }
  return result
}

console.log(solution2('abc'));
