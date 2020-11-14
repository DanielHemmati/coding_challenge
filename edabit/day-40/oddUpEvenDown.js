// https://edabit.com/challenge/dWNPtNeQgyn6mS8FA

/**
 *
 * @param {Array} arr
 */
function transform(arr) {
    // i happy with this
    return arr.map((x) => (x % 2 === 0 ? x - 1 : x + 1));
}

// console.log(transform([1, 2, 3, 4, 5]))

//------------- other solution -------------

/**
 *
 * @param {Array} arr
 */
function first(arr) {
    // this one is much better
    return arr.map((x) => (x % 2 === 0 ? --x : ++x));
}
