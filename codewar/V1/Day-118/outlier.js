//https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
/**
 *
 * @param {Array} integers
 */
function findOutlier(integers) {
  var oddNumber = 0;
  var evenNumber = 0;

  for (let i = 0; i < integers.length; ++i) {
    if (integers[i] % 2 === 0) {
      evenNumber++;
    } else {
      oddNumber++;
    }
  }

  if (evenNumber > oddNumber) {
    return integers[integers.findIndex((item) => item % 2 !== 0)];
  } else if (oddNumber > evenNumber) {
    return integers[integers.findIndex((item) => item % 2 === 0)];
  }
}

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

// i think we can solve this with filter too
// let's test this
/**
 *
 * @param {Array} int
 */
function findOutlier2(int) {
  return int.filter((item) => item % 2 === 0).length >
    int.filter((item) => item % 2 !== 0).length
    ? int.filter((item) => item % 2 !== 0)[0]
    : int.filter((item) => item % 2 === 0)[0];
}

console.log(findOutlier2([2, 4, 0, 100, 4, 11, 2602, 36]));
