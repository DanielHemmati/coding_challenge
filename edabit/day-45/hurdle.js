
// https://edabit.com/challenge/Hp9FitGXpKqdCW6Fd

/**
 * 
 * @param {array} hurdles 
 * @param {number} jumpHeight 
 */
function hurdleJump(hurdles, jumpHeight) {
  return hurdles.every(item => item <= jumpHeight)
}

console.log(hurdleJump([1, 2, 3, 4, 5], 5))
console.log(hurdleJump([5, 5, 3, 4, 5], 3))
console.log(hurdleJump([5, 4, 5, 6], 10))


//------------- other soultion -------------
function hurdleJump2(hurdles, jumpHeight) {
  // this one is much better 
  return Math.max(...hurdles) <= jumpHeight
}

