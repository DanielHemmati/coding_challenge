// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

/**
 *
 * @param {String} iterable
 * @returns
 */
const uniqueInOrder = (iterable) => {
  return [...iterable].filter((item, i, arr) => {
    return arr[i] !== arr[i + 1];
  });
};

// const a = "AAAABBBCCDAABBB";
// console.log(uniqueInOrder(a));

/**
 *
 * @param {String} iter
 */
const test = (iter) => {
  let res = [];
  for (let i = 0; i < iter.length; ++i) {
    if (res.length === 0 || iter[i] !== res[-1]) {
      res.push(iter[i]);
    }
  }
  return res;
};

const a = "AAAABBBCCDAABBB";
// console.log(test(a));
