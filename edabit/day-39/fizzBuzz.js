
// https://edabit.com/challenge/hoDbsz38GzWwBQ47w

/**
 * 
 * @param {Number} num 
 */
function FizzBuzz(num) {
    if (num % 15 === 0) return "FizzBuzz"
    else if (num % 3 === 0) return "Fizz"
    else if (num % 5 === 0) return "Buzz"
    else return num
}

console.log(FizzBuzz(89))
