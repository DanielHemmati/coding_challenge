
// https://edabit.com/challenge/bADsAhtb5g6pu5WYM

/**
 * 
 * @param {Array} arr 
 * @param {Number} num 
 */
function mysteryFunc(arr, num) {
    return arr.map(item => item % num)
}

console.log(mysteryFunc([5, 7, 8, 2, 1], 2));
console.log(mysteryFunc([9, 8, 16, 47], 4 ));