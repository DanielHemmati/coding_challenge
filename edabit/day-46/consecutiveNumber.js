
// https://edabit.com/challenge/v5TorwH9tiNtddSY3

/**
 * 
 * @param {Number} low 
 * @param {Number} high 
 */
function getSequence(low, high) {
  // if (low === high) return [low]
  return  (low === high) ? [low] :  Array.from({length: (high - low) + 1}, (_, i) => low + (i * 1))
}

var n = 1123
// console.log([n])
console.log(getSequence(11, 22))
console.log(getSequence(11, 11))

