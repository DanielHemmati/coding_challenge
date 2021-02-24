// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

/**
 *
 * @param {Number} n
 */
function descendingOrder(n) {
  if (n.toString().length === 1) return n;
  return Number([...n.toString()].sort((a, b) => b - a).join(""));
}

console.log(descendingOrder(123));
