// https://edabit.com/challenge/3jZyJTfsXTXXwAQkA
// we initially haev this and we have to fix the problem
// function checkEquals(arr1, arr2) {
//     if (arr1 === arr2) {
//         return true;
//     } else {
//         return false;
//     }
// }

function checkEquals(arr1, arr2) {
    // it won't work with undefiend and null value, but it will work
    // for this problem
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

function MySecondSolution(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

//------------- other solution -------------

/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 */
function first(arr1, arr2) {
    
}

var test = ['daniel', 'hemmati', 'shahin']
let res = test.every(function(item, index) {
    return `this is the index==${index}  and this item ${item > 0}`
})
