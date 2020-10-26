// https://edabit.com/challenge/77zq4RhMgWup22H6d

/**
 * 
 * @param {Array} arr 
 * @param {Number} n 
 */
function existsHigher(arr, n) {
    return arr.some(item => Math.max(item) >= n)
}

var x = [1,2,3]
// console.log(Math.max(...x));
// console.log(existsHigher(x, 3));

// but this one is better 
/**
 * 
 * @param {Array} arr 
 * @param {Number} n 
 */
function better(arr, n) {
    return Math.max(...arr) >= n;
}

console.log(better(x, 3));