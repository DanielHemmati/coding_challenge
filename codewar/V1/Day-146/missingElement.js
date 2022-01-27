/**
 *
 * @param {Array} arr
 * @param {Number} len
 */
const getMissingElement = (arr, len = arr.length) => {
  // that's really cool
  // you can put 45 also
  return arr.reduce((a, b) => a - b, (len * (len + 1)) / 2);
};

// console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));

let a = [0, 5, 1, 3, 2, 9, 7, 6, 4];
// let res = a.reduce((a, b) => a - b, 45);
// console.log((a.length * (a.length + 1)) / 2);
// console.log(res);

/* ----------------------------- other solution ----------------------------- */

/**
 *
 * @param {Array} superImportantArray
 */
function findTheOne(superImportantArray) {
  for (let i = 0; i <= 10; ++i) {
    if (superImportantArray.indexOf(i) == -1) return i;
  }
}
console.log(findTheOne(a));
