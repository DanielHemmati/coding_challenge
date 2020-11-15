
// https://edabit.com/challenge/p5xNwq2v9ZX7vo3mb


/**
 * 
 * @param {String} initial 
 * @param {Array} words 
 */
function dictionary(initial, words) {
    // easy
    return words.filter((word) => word.startsWith(initial))
}

console.log(dictionary("bu", ["button", "breakfast", "border"]))
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]))
