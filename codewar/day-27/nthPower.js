// https://www.codewars.com/kata/57d814e4950d8489720008db/train/javascript

/**
 *
 * @param {Array} array
 * @param {Number} n
 */
function index(array, n) {
    // readable version
    // if (n > array.length - 1) {
    //     return -1;
    // }
    // return Math.pow(array[n], n);

    // or this one
    return n > array.length - 1 ? -1 : Math.pow(array[n], n);
}

var array = [1, 2, 3];
// console.log(index(array, 2));

//------------- other solution ------------
// this solution is the awesome 
/**
 * 
 * @param {Array} array 
 * @param {Number} n 
 */
// you can write one-liner or whatever you want
function index2(array, n) {
    return array[n] ** n || -1  
}
