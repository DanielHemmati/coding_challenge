// https://www.codewars.com/kata/570597e258b58f6edc00230d/train/javascript

/**
 *
 * @param {String} arr
 */
function array(arr) {
  let strArray = arr.split(",");
  strArray.pop();
  strArray.shift();

  // [] === [] is false, don't forget this
  if (arr === "" || strArray.length === 0) {
    return null;
  }
}

console.log(array("1,2"));

/* ----------------------------- other solution ----------------------------- */

let input1 = "1,2,3";
// shit
let res = input1.split(",").slice(1, -1).join(" ") || null;
// console.log(res);
/**
 *
 * @param {String} arr
 */
// best solution to be honest
function removeFirstAndLast(arr) {
  return arr.split(",").slice(1, -1).join(" ") || null;
}
