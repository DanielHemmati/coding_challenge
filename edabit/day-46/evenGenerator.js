// https://edabit.com/challenge/dNZmjoi3Lip2j4emx

/**
 *
 * @param {number} num
 */
function findEvenNums(num) {
  return Array.from({ length: (num - 2) / 2 + 1 }, (_, i) => 2 + i * 2);
}

var res = Array.from({ length: 10 }, (_, i) => 10 + i * 1);
// console.log(res)

// for tomorrow

const range = (start, stop, step) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
// function rangeEven(num) {
//   return Array.from({length: (num - 2) / 2 + 1 }, (_, i) => 2 + (i*2))
// }
// console.log(range(0 ,4, 2))
// console.log(range(2, 10, 2))

// console.log(rangeEven(4))

//------------- other solution -------------

/**
 *
 * @param {Number} num
 */
function first(num) {
  let even = [];
  for (let i = 1; i <= num; ++i) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  return even;
}

// console.log(first(8))

function second(num) {
  // because we can't have 0 in our list, we are going to add one to all of them
  // with map method
  return [...Array(num).keys()].map((x) => x + 1).filter((x) => !(x % 2));
}

function third(num) {
  // math.floor is optional, and it's the better choice
  // and the reason he/she divide the num by two is completely math
  // and last part is obvius
  return Array.from({ length: Math.floor(num / 2) }, (_, i) => (i + 1) * 2);
}

// console.log(third(8))

function fourth(num) {
  return [...Array(Math.floor(num / Math.pow(2, 1))).keys()].map((x) => 2+2*x);
}

// console.log(fourth(8))

function shiftToLeft(x, y) {
  return Math.floor(x * Math.pow(2, y));
}

function shiftToRight(x, y) {
    return Math.floor(x / Math.pow(2, y));
}


function fifth(params) {
  return [...Array(params >> 1).keys()].map(x => 2+2*x)
}


console.log(fifth(8))



