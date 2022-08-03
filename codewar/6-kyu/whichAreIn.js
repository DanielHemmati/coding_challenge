// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript


/**
 *
 * @param {Array} array1
 * @param {Array} array2
 */
function inArray(array1, array2) {
  let res = [];
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array2[i].includes(array1[j])) {
        res.push(array1[j]);
      }
    }
  }
  let removeDuplicate = [...new Set(res)];

  return !removeDuplicate.length ? [] : removeDuplicate.sort((a, b) => a > b);
}

let a1 = ["arp", "live", "strong"];
let a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
console.log(inArray(a1, a2));
