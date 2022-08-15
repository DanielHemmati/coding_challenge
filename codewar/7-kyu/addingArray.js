// https://www.codewars.com/kata/59778cb1b061e877c50000cc/train/javascript

// TODO: solve this again
/**
 *
 * @param {Array} arr
 */
function arrAdder(arr) {
  let res = "";
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      res += arr[j][i] + "";
    }
    res += " ";
  }
  return res.trim();
}

let a = [
  ["J", "L", "L", "M"],
  ["u", "i", "i", "a"],
  ["s", "v", "f", "n"],
  ["t", "e", "e", ""],
];
// console.log(a[0][0])
// console.log(a[1][0])
// console.log(a[2][0])
// console.log(arrAdder(a));

let b = [
  ["T", "M", "i", "t", "p", "o", "t", "c"],
  ["h", "i", "s", "h", "o", "f", "h", "e"],
  ["e", "t", "", "e", "w", "", "e", "l"],
  ["", "o", "", "", "e", "", "", "l"],
  ["", "c", "", "", "r", "", "", ""],
  ["", "h", "", "", "h", "", "", ""],
  ["", "o", "", "", "o", "", "", ""],
  ["", "n", "", "", "u", "", "", ""],
  ["", "d", "", "", "s", "", "", ""],
  ["", "r", "", "", "e", "", "", ""],
  ["", "i", "", "", "", "", "", ""],
  ["", "a", "", "", "", "", "", ""],
];

// console.log(arrAdder(b));

/* --------------------------------- second --------------------------------- */
/**
 *
 * @param {Array} arr
 */
function second(arr) {
  return arr[0].map((_, i) => arr.map((r) => r[i]).join("")).join(" ");
}

// console.log(second(b));

/**
 *
 * @param {Array} arr
 */
function third(arr) {
  // the seond one is easier
  return arr[0]
    .map((_, i) => arr.reduce((pre, val) => pre + val[i], ""))
    .join(" ");
}
console.log(third(b));
