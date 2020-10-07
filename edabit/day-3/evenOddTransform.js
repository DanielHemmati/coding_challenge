// https://edabit.com/challenge/MsNyn2xmTzRWjFuMT

/**
 *
 * @param {array} arr
 * @param {number} n
 * @returns array of odd number
 */
// this is my solution 
function evenOddTransform(arr, n) {
    var res = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            res.push(arr[i] - 2 * n);
        } else {
            res.push(arr[i] + 2 * n);
        }
    }
    return res;
}
var holdArray = randomArray(6, 9);
console.log(holdArray);
// console.log(evenOddTransform(holdArray, 3));

/**
 *
 * @param {number} item
 * @param {number} highestNubmer
 */
function randomArray(item, highestNubmer) {
    var array = [];
    for (let i = 0; i < item; i++) {
        array.push(Math.floor(Math.random() * highestNubmer));
    }
    return [...new Set(array)];
}

// console.log(randomArray(6,9));

//---------- solution for others  ----------
