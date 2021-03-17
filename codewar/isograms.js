// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

/**
 *
 * @param {String} str
 */
function isIsogram(str) {
  return [...str.toLowerCase()]
    .sort((a, b) => a.localeCompare(b))
    .every((item, index, arr) => {
      return arr[index] !== arr[index + 1];
    });
}

// console.log(isIsogram("ndycfzF"));

/**
 *
 * @param {String} str
 */
function secondSolution(str) {
  // this one is really clever
  return new Set(str.toUpperCase()).size === str.length;
}

// console.log(secondSolution("ndycfzF"));

// or find he
function third(str) {
  // we should learn more about this
  return str.match(/([a-z]).*\1/i);
}

console.log(third("ndycfzF"));
