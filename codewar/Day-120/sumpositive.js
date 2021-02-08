// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript
/**
 *
 * @param {Array} arr
 */
function positiveSum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > 0) {
      count += arr[i];
    }
  }
  return count;
}

// console.log(positiveSum([1, 2, 3, 4, 5]));

// other solution

/**
 *
 * @param {Array} arr
 */
// i wanted to write this at first then i didn't know how to write that second part
// good that i know now
function second(arr) {
  // return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}

console.log(second([1, 2, 3, 4, 5]));
