// https://edabit.com/challenge/dzdoYrTL5vws4dFud

/**
 * 
 * @param {Array} arr 
 */
function nextElement(arr) {
    let lastItem = arr[arr.length - 1] 
    let seconLastItem = arr[arr.length - 2]
    let seq = lastItem - seconLastItem;
    return lastItem + seq
}

var array = [-5, -6, -7]
// console.log(nextElement(array));

//------------- other solution ------------

/**
 * 
 * @param {Array} arr 
 */
function Better(arr) {
    // i dont' remember highschool LOL
    return arr[arr.length - 1] + (arr[1] - arr[0])
}

console.log(Better(array));
