// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
/**
 *
 * @param {Array} arr
 * @param {Number} k
 */
// really good solution but this is not my solution
function longestConsec(arr, k) {
  const n = arr.length;
  if (n === 0 || k > n || k <= 0) return "";

  return arr.reduce((longest, item, i) => {
    const combined = arr.slice(i, k + i).join("");
    return combined.length > longest.length ? combined : longest;
  }, "");
}

let a = ["zone", "abigail", "theta", "form", "libe", "zas", "hey"];
// console.log(longestConsec(a, 3));

// let do it with for loop
/**
 *
 * @param {Array} arr
 * @param {Number} k
 */
// hell yeah this is my solution
function second(arr, k) {
  const n = arr.length;
  if (n === 0 || k > n || k <= 0) return "";
  let res = [];
  for (let i = 0; i < arr.length; ++i) {
    let combinend = arr.slice(i, k + i).join("");
    res.push(combinend);
  }

  let holdLength = [];
  for (let i = 0; i < res.length; ++i) {
    holdLength.push(res[i].length);
  }
  let index = holdLength.indexOf(Math.max(...holdLength));
  // console.log(index);

  return res[index];
}

// console.log(second(a, 3));

/**
 *
 * @param {Array} arr
 * @param {Number} k
 */
// i like this, really neat
function third(arr, k) {
  let len = arr.map((_, i, arr) => {
      return arr.slice(i, i + k).join("").length;
    }),
    i = len.indexOf(Math.max(...len));
  return arr.slice(i, i + k).join("");
}

// console.log(third(a, 3));

/**
 *
 * @param {Array} arr
 * @param {Number} k
 */
function fourth(arr, k) {
  return arr
    .map((_, index, arr) => {
      return arr.slice(index, index + k).join("");
    })
    .reduce((longest, current) => {
      // this one is good also
      return current.length > longest.length ? current : longest;
    });
}

console.log(fourth(a, 3));
