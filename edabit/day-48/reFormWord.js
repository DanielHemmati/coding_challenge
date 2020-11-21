
//https://edabit.com/challenge/KQQ7RMXjSK257GQgy


/**
 * 
 * @param {String} left 
 * @param {String} right 
 */
function getWord(left, right) {
  return left.charAt(0).toUpperCase() + left.slice(1)  + right
}

var a = "daniel hemmati"
// let res = a.charAt(0).toUpperCase() + a.slice(1)

// console.log(res)

console.log(getWord(a))

