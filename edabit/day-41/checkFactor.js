// https://edabit.com/challenge/k5k3aXWp7aibft74n


/**
 * 
 * @param {Array} factors 
 * @param {Number} num 
 */
function checkFactors(factors, num) {
    return factors.every((item) => num % item === 0)
}

// console.log(checkFactors([2, 3, 4], 12) )
// console.log(checkFactors([1, 2, 3, 8], 12) )
// console.log(checkFactors([1, 2, 50], 100))

//------------- other solution -------------

// really clever
function checkFactors2(factors, num) {
	return !factors.find(n => num % n )
}

console.log(checkFactors2([2, 3, 4], 12) )
console.log(checkFactors2([1, 2, 3, 8], 12) )
console.log(checkFactors2([1, 2, 50], 100))

const simpleArray = [3, 5, 7, 15, '123i'];
console.log(simpleArray.find((item) => item === 'daniel'))

