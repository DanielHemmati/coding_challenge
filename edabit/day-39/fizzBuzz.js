// https://edabit.com/challenge/hoDbsz38GzWwBQ47w

/**
 *
 * @param {Number} num
 */
function FizzBuzz(num) {
  if (num % 15 === 0) return "FizzBuzz";
  else if (num % 3 === 0) return "Fizz";
  else if (num % 5 === 0) return "Buzz";
  else return num;
}

// console.log(FizzBuzz(89));

//------------- other solution -------------

function FizzBuzz2(num) {
  // that's really clever
  return (num % 3 ? "" : "Fizz") + (num % 5 ? "" : "Buzz") || `${num}`; // this should be literal
}

console.log(FizzBuzz2(98));
