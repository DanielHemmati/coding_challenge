// https://edabit.com/challenge/MWRiXba7bvi792SmQ

// Fix this code
/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function checkEquals(arr1, arr2) {
    // if (arr1.length !== arr2.length) return false;
    // if (arr1.join(',') === arr2.join(',')) {
    //     return true
    // } else {
    //     return false
    // }
    // or 
    return arr1.join(',') === arr2.join(',')
}

// console.log(checkEquals([1,2], [1,3]))
// console.log(checkEquals([1, 2], [1, 2]))
// console.log(checkEquals([4, 5, 6], [4, 5, 6]))
// console.log(checkEquals([4, 7, 6], [4, 5, 6]))
// console.log(checkEquals([1, 12], [11, 2]))

//------------- other solution -------------


function first(arr1, arr2) {
    return (arr1.toString() === arr2.toString());
}


// console.log(first([1,2], [1,3]))
// console.log(first([1, 2], [1, 2]))
// console.log(first([4, 5, 6], [4, 5, 6]))
// console.log(first([4, 7, 6], [4, 5, 6]))
// console.log(first([1, 12], [11, 2]))

function two(arr1, arr2) {
    // this one is clever love it 
    return arr1.every((x, i) => x === arr2[i])
}
// console.log(two([1,2], [1,3]))
// console.log(two([1, 2], [1, 2]))
// console.log(two([4, 5, 6], [4, 5, 6]))
// console.log(two([4, 7, 6], [4, 5, 6]))
// console.log(two([1, 12], [11, 2]))