// https://edabit.com/challenge/hwWLHcDoPZmXcGHyd

/**
 * 
 * @param {Array} arr
 * @param {String} ending
 */

function addEnding(arr, ending) {
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        array.push(arr[i] + ending)
    }
    return array
}

// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));


//---------- other solution ----------

/**
 * 
 * @param {Array} arr 
 * @param {String} ending 
 */
function addEnding2(arr, ending) {
    return arr.map(word => word + ending)
}

// much better. love it
console.log(addEnding2(["clever", "meek", "hurried", "nice"], "ly"));