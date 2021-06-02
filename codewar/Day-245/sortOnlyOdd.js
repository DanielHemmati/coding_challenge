/**
 *
 * @param {Array} array
 * @returns {Array}
 */
function sortArray(arr) {
  // return array.sort((a, b) => a - b);
  const odds = arr.filter((x) => x % 2).sort((a, b) => a - b);

  return arr.map((x) => (x % 2 !== 0 ? odds.shift() : x));
}

let input = [5, 8, 6, 3, 4];
// console.log(input.shift("da"));
console.log(sortArray(input));
