// https://www.codewars.com/kata/5b94d7eb1d5ed297680000ca/train/javascript

/**
 *
 * @param {Array} arr
 */
function solve(arr) {
  let reversed = arr
    .map((el, i) => {
      if (el.includes("Begin")) return el;
      if (el.includes("Right")) return el.replace("Right", "Left");
      if (el.includes("Left")) return el.replace("Left", "Right");
    })
    .reverse();
  return reversed;
}

let a = ["Begin on 3rd Blvd", "Right on First Road", "Left on 9th Dr"];
// ['Begin on 9th Dr', 'Right on First Road', 'Left on 3rd Blvd']
console.log(solve(a));
