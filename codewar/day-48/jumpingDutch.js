
// https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript

/**
 * 
 * @param {Number} floor 
 */
function sc(floor){
  var repeat = "Aa~ "
  if (floor <= 1 ) return ""
  if (floor > 6) return `${repeat.repeat(floor - 1)}Pa!`
  if (floor <= 6) return `${repeat.repeat(floor - 1)}Pa! Aa!`


}

console.log(sc(-1))
console.log(sc(2))
console.log(sc(7))

