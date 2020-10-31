// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

/**
 * 
 * @param {Array} numbers 
 */
function squareSum(numbers){
    // so this one was right
    return numbers.map(item => item**2).reduce((accu, curValue) => accu + curValue, 0)
}

var arr = [1,2,2]
// console.log(squareSum(arr));

//------------- other solution ------------
/**
 * 
 * @param {Array} n 
 */
// i knew this, but i don't like reduce 
function squareSum2(n) {
    return n.reduce(function (sum, n) {
    }, 0) 
}