// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
/**
 *
 * @param {String} s
 */
// that was nice
function accum(s) {
  var res = [];
  for (let i = 0; i < s.length; ++i) {
    res.push(s[i].repeat(i + 1));
  }
  return res
    .map((item) => {
      return item.charAt(0).toUpperCase() + item.toLowerCase().slice(1);
    })
    .join("-");
}

// console.log(accum("MjtHuBovqr"));

/* ----------------------------- other solution ----------------------------- */

/**
 *
 * @param {String} s
 */
function second(s) {
  return [...s]
    .map((char, index) => {
      // that's really nice technique
      return char.toUpperCase() + char.toLowerCase().repeat(index);
    })
    .join("-");
}

// console.log(second("abcd"));

/**
 *
 *
 * @param {String} s
 */
function third(s) {
  var array = [];
  for (let i = 0; i < s.length; ++i) {
    // repeat zero is nothing, wow that nice
    array.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
  }
  console.log(array);
}

// console.log(third("abcd"));

let test = "test";

console.log(test.repeat(0));
