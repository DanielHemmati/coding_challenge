/**
 *
 * @param {Array} arr
 * @returns {Array}
 */
function dirReduc(arr) {
  // it's just been 1 month i haven't practice FUCK
  for (let i = 0; i < arr.length; ++i) {
    if (
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
      (arr[i] === "WEST" && arr[i + 1] === "EAST")
    ) {
      arr.splice(i, 2);
    }
  }
  return arr;
}

/* -------------------------------- solution -------------------------------- */

// how are you today
/**
 *
 * @param {Array} arr
 */
function solutoin1(arr) {}
