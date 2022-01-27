// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function arrayPlusArray(arr1, arr2) {
    // let's go
    return [...arr1, ...arr2].reduce((acc, currValue) => acc + currValue, 0)
}


var a = [1,2,3]
var b = [4,5,6]
// var res = [...a,...b].reduce((acc, currValue) => acc + currValue)

console.log(arrayPlusArray(a,b));

//------------- other solution ------------
// your boy wrote one of the best solution
