// https://edabit.com/challenge/36n9MghXxExpJkfxC

/**
 *
 * @param {Number} a
 * @param {Number} b
 */
function solve(a, b) {
  // i didn't solve this kind of problem yet LOL
  // ax+1=b+x
  // ax - x - b = -1
  // x (a - 1) - b = -1
  // x(a - 1+ = b - 1
  // x = (b - 1) / (a - 1)
  if (a === 1) {
    return b === 1 ? "Any number" : "No solution";
  } else {
    return +((b - 1) / (a - 1)).toFixed(3);
  }
}
console.log(solve(4, 7))

