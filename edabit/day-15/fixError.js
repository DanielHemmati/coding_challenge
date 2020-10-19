// https://edabit.com/challenge/bcM99TYJmRv5JnZaA

/**
 * 
 * @param {Array} arr 
 */
function checkAllEven(arr) {
//   return arr.every(x % 2 === 0)
    return arr.every(function(x) {
        return x % 2 === 0;
    })
}

var test1 = [1, 2, 3, 4] 
var test2 = [2, 4, 6]

console.log(checkAllEven(test1));