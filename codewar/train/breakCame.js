// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

/**
 *
 * @param {String} string
 */
function solution(str) {
  return !str
    ? ""
    : str
        .replace(/([A-Z])/g, ",$1")
        .split(",")
        .join(" ");
}

let a = "camelCasing";
console.log(solution(a));

// console.log(a.replace(/([A-Z]+)/, ",$1").split(','));

/* --------------------------------- others --------------------------------- */
/**
 *
 * @param {String} str
 */
function second(str) {
  str = [...str].map((char) => {
    if (char === char.toUpperCase()) {
      char = " " + char;
    }
    return char;
  }).join("");

  return str;
}

console.log(second(a));
