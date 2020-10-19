// https://edabit.com/challenge/2SJX9ha6W2bYkzSNX

/**
 * 
 * @param {Array} arr 
 */
function removeNull(arr) {
    return arr.filter(function(item) {
        return item !== null;  
    })
}

// today i am on fire man let's go. 
// console.log(removeNull(["a", null, "b", null]));



/**
 * 
 * @param {Array} arr 
 */
function removeNull2(arr) {
    // really cool
    return arr.filter(Boolean)
}

console.log(removeNull2(["a", null, "b", null, false]));
