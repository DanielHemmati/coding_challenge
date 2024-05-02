// https://www.codewars.com/kata/5513795bd3fafb56c200049e/javascript

/**
 * 
 * @param {Number} x 
 * @param {Number} n 
 * @returns 
 */
function countBy(x, n) {
  let res = [];
  for (let i = 1; i <= n; i++){
    res.push(x * i);
  }
  return res;
}

// console.log(countBy(1, 10))
// console.log(countBy(2, 5))

// second solution, one liner, which i won't remember it in a right time
const countBy2 = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * 1);