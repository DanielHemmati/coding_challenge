// https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce/train/javascript
/**
 *
 * @param {Number} number
 */
function multiTable(n) {
  return [...Array(10)]
    .map((_, i) => `${i + 1} * ${n} = ${n + i * n}`)
    .join("\n");
}
console.log(multiTable(3));
// console.log(Array(10));
