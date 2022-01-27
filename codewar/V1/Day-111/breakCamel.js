// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
/**
 *
 * @param {String} string
 */
function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

console.log(solution("camelCase"));
