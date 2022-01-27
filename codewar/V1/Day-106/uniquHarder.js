// https://www.codewars.com/kata/5862e0db4f7ab47bed0000e5/train/javascript

/**
 *
 * @param {Array} arr
 */
function findUniq(arr) {
  let res = arr.sort();
  if (res.every(Number)) {
    if (res[0] === res[1]) {
      return res[res.length - 1];
    }
    return res[0];
  } else {
    return res.filter((item) => String(item) === item).join("");
  }
}

// let s = 0;
// let n = 0;
// for (let i = 0; i < test.length; ++i) {
//   if (typeof test[i] === "string") {
//     s += 1;
//   } else if (typeof test[i] === "number") {
//     n += 1;
//   }
// }
// console.log("string is " + s);
// console.log("number is " + n);

// let res = test.sort((a, b) => a - b);
// let res = test.filter((item) => String(item) === item);
// console.log(res);

// not solved :(  => again

/* -------------------------------------------------------------------------- */
/*                               other solution                               */
/* -------------------------------------------------------------------------- */

// my fav solution
/**
 *
 * @param {Array} arr
 */
function second(arr) {
  let mySet = [...new Set(arr)];
  return arr.filter((item) => item === mySet[0]).length === 1
    ? mySet[0]
    : mySet[1];
}

// let test = [4, 4, "foo", 4];

// console.log(second(test));

/**
 *
 * @param {Array} arr
 */
function third(arr) {
  // nah i like this one
  let ans = arr.filter((item) => {
    // i want the one which are not equal.
    return Object.is(item, arr[0]) ? false : true;
  });
  return ans.length === 1 ? ans.pop() : arr[0];
}

let test = [4, 4, "foo", 4];
let input = [2, 1, 1, 1, 1, 1, 1, 1];

console.log(third(input));
