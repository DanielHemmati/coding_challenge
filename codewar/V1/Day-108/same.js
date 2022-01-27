// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

/**
 *
 * @param {Array} array1
 * @param {Array} array2
 */
function comp(array1, array2) {
  if (array1 === null || array2 === null || array1.length !== array2.length) {
    return false;
  }
  let sortArray1 = array1.sort((a, b) => a - b);
  let sortArray2 = array2.sort((a, b) => a - b);
  let sqrArray2 = sortArray2.map((item) => Math.sqrt(item));
  return sqrArray2.every((element, index) => element === sortArray1[index]);
}

a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];

// console.log(comp(a1, a2));

/* ----------------------------- other solution ----------------------------- */

const firstArray = a1.sort((a, b) => a - b).join("");
const secondArray = a2
  .map((item) => Math.sqrt(item))
  .sort((a, b) => a - b)
  .join("");
// console.log(firstArray === secondArray);

function second(a, b) {
  return (
    !!a &&
    !!b &&
    b
      .map((x) => Math.sqrt(x))
      .sort((a, b) => a - b)
      .join("") === a.sort((a, b) => a - b).join("")
  );
}

console.log(second(a1, a2));
