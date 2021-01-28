// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/javascript

/**
 *
 * @param {String} s1
 * @param {String} s2
 */
// it does work but i don't know why?? LOL
function longest(s1, s2) {
  return [
    ...new Set(
      [...new Set(s1)].sort().join("") + [...new Set(s2)].sort().join("")
    ),
  ]
    .sort()
    .join("");
}

const a = "xyaabbbccccdefww";
let res = [...new Set(a)].join("");
// console.log(res);
const input1 = "aretheyhere";
const input2 = "yestheyarehere";

console.log(longest(input1, input2));
