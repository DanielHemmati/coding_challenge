/**
 *
 * @param {String} str
 */
function solution(str) {
  // return str.length % 2 !== 0
  //   ? (str + "_").match(/.{1,2}/g) || []
  //   : str.match(/.{1,2}/g) || [];
  // or
  // so this works like python findall
  return (str + "_").match(/.{2}/g) || [];
}

let a = "abc";
// console.log((a+"_").match(/.{1,2}/g))
console.log(solution(a));
