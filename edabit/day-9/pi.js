
/**
 * 
 * @param {number} n 
 */
function getPi(n) {
    // formula https://en.wikipedia.org/wiki/Machin-like_formula
    return (16 * Math.atan(1 / 5) - 4 * Math.atan(1 / 239)).toFixed(n)
}

// this is next level
console.log(getPi(20));