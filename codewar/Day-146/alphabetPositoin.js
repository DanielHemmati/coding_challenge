// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

/**
 *
 * @param {String} text
 */
function alphabetPosition(text) {
  let res = "";
  for (let i = 0; i < text.length; ++i) {
    let code = text.toUpperCase().charCodeAt(i);
    // console.log(code);
    if (code > 64 && code < 91) res += code - 64 + " ";
  }
  // console.log(res);
  // this will work
  return res.slice(0, res.length - 1);
  // this won't work
  // return res;
}
let a = "The sunset sets at twelve o' clock.";

// console.log(alphabetPosition(a));

/**
 *
 * @param {String} text
 */
function secondSolution(text) {
  return [...text.toUpperCase()]
    .map((char, index) => {
      let res = "";
      if (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91) {
        res += char.charCodeAt(0) - 64 + " ";
      }
      return res;
    })
    .join("");
}

// console.log(secondSolution(a));

/* ----------------------------- other solution ----------------------------- */
/**
 *
 * @param {String} text
 */
function thirdSolution(text) {
  // this is beatiful
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((char) => char.charCodeAt(0) - 64)
    .join(" ");
}

console.log(thirdSolution(a));
