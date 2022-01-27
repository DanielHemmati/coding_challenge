
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 */
function between(a, b) {
  return Array.from({ length: b - a + 1 }, (_, i) => a + (i * 1) )
}

var res = Array.from({length: 4 - 1+1}, (_,i) => 1 + (i * 1))
// console.log(res)

console.log(between(1,4))

