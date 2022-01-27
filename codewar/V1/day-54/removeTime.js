// https://www.codewars.com/kata/56b0ff16d4aa33e5bb00008e/train/javascript

/**
 *
 * @param {String} longDate
 */
function shortenToDate(longDate) {
  return longDate.split(", ").slice(0, 1).join("");
}

let input = "Friday May 2, 9am";

console.log(shortenToDate(input));
