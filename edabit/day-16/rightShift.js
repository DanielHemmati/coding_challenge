// https://edabit.com/challenge/ALGbgMWLuEdrh22fB

/**
 *
 * @param {number} x
 * @param {number} y
 */
function shiftToRight(x, y) {
    return Math.floor(x / Math.pow(2, y));
}

// i don't know why we are doing this shifting ??
function shiftToLeft(x, y) {
    return Math.floor(x * Math.pow(2, y));
}

console.log(shiftToRight(80, 3));

var x = 24 << 10;
console.log(shiftToLeft(24, 10));