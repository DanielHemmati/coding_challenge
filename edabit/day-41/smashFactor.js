
// https://edabit.com/challenge/hJzbsCExJqCgAECX4


/**
 * 
 * @param {Number} bs 
 * @param {Number} cs 
 */
function smashFactor(bs, cs) {
    return Number((bs / cs).toFixed(2))
}

console.log(typeof smashFactor(139.4, 93.8))

//------------- other solution -------------

/**
 * 
 * @param {Number} bs 
 * @param {Number} cs 
 */
function one(bs, cs) {
    // that plus make the result to number, i don't know why
    // whatever, it's shorter than Number
    return +(bs / cs).toFixed(2);
}

