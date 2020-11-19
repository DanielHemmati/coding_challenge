

// https://edabit.com/challenge/95YiRnBSnfzSQWAuu

function product(a,b) {
  return function(c,d) {
    return function(e,f) {
      return a * c * e + b * d * f; 
    } 
  }
}

// console.log(product()('hemmati'))
console.log(product(1,2)(1,1)(2,3))

