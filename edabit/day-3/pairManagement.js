
// https://edabit.com/challenge/BFnsRqe8PFvEwcRNt

/**
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @example 
 * // makePari(1,2) => [1,2]
 * @returns {Array}
 */
// my solution
function makePair(num1, num2) {
    var array =[]
    for (var i = 0; i < arguments.length; ++i) {
        array.push(arguments[i])
    }
    return array;
}

// console.log(makePair(1,2));

//---------- other solution ----------
// ahhh i forgot to use spread operator

function makePari2(num1, num2) {
    return [...arguments];
}

console.log(makePari2(1,2));
