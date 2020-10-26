// https://edabit.com/challenge/L76DRaqDXkBJJ7tBr

/**
 * 
 * @param {Array} names 
 */
function findBob(names) {
    // return names.findIndex(item => item === 'Bob');
    return names.indexOf('Bob');
}

console.log(findBob(["Jimmy", "Layla", "Bob"]));