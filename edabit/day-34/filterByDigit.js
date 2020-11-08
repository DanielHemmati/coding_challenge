

/**
 * 
 * @param {Array} arr 
 * @param {number} num 
 */
function filterDigitLength(arr, num) {
    // i mean it's cool, but we are repeating ourself i guess 
    return arr.map(String).filter(x => x.length).map(Number)
}

console.log(filterDigitLength([88, 232, 4, 9721, 555], 3))

// it's so sick man 
var res = [1,2,3,222,333].map(String).filter(function(item) {
    return item.length === 3 
}).map(Number)

// console.log(res)
// you can also use this idea 
var n = 12
console.log(typeof n.toString())

/**
 * 
 * @param {Array} arr 
 * @param {Number} num 
 */
function filterDigitLength2(arr, num) {
   return arr.filter(x => x.toString().length === num) 
}




