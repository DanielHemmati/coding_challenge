// https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

/**
 *
 * @param {String} s
 */
function getMiddle(s) {
  return s.length % 2 === 0
    ? [...s].slice(s.length / 2 - 1, s.length / 2 + 1).join("")
    : s[Math.round(s.length / 2 - 1)];
}

let test = "headoo";
// console.log([...test].slice(test.length / 2 - 1, test.length / 2 + 1));

let odd = "someg";
// console.log(even[Math.round(even.length / 2 - 1)]);

// console.log(getMiddle(test));

// console.log(Boolean(getMiddle(2)));
// console.log(getMiddle("miable"));

/* ----------------------------- other solution ----------------------------- */
/**
 *
 * @param {String} s
 */
function second(s) {
  // really nice
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// console.log(second("testw"));
// console.log("somew".substr(2, 2));

/**
 *
 * @param {String} s
 */
function third(s) {
  // it's not inclusive
  return s.substring(Math.ceil(s.length / 2 - 1), Math.floor(s.length / 2 + 1));
}

console.log(third("some"));
