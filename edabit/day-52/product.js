
// https://edabit.com/challenge/aJzvBZgp8nzwSk94A


/**
 * 
 * @param {Array} arr 
 */
function divisible(arr) {
  return arr.reduce((acc, currentValue) => acc * currentValue) % arr.reduce((acc, currentValue) => acc + currentValue) === 0
}

var input = [1, 2, 3]
var x = [3, 2, 4, 2]
var y = [4, 2, 6]

console.log(divisible(y))
