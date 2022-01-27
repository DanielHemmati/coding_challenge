// https://www.codewars.com/kata/57a0885cbb9944e24c00008e/solutions
/**
 *
 * @param {String} s
 */
// it didn't work for me
function test(s) {
  return s.replace(/!+/, "");
}

let input = "daniel hemmati!!";
console.log(test(input));
