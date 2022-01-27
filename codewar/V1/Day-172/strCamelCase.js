// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript

/**
 *
 * @param {String} str
 */
function toCamelCase(str) {
  if (!str) return "";
  let strToNormalString = str.replace(/\-|\_/g, " ");
  let splitBySpace = strToNormalString.split(" ");
  let res = [];
  for (let i = 1; i < splitBySpace.length; ++i) {
    const changeCase =
      splitBySpace[i].charAt(0).toUpperCase() + splitBySpace[i].slice(1);
    res.push(changeCase);
  }
  res.unshift(splitBySpace[0]);
  return res.join("");
}

let a = "the_stealth_warrior";
let b = "The-Stealth-Warrior";
let c = "A-B-C";

// console.log(toCamelCase(c));

// not a good solution

/* ----------------------------- other solution ----------------------------- */

/**
 *
 * @param {String} str
 */
function second(str) {
  let regex = /[-_]\w/gi;
  return str.replace(regex, function (match) {
    return match.charAt(1).toUpperCase();
  });
}

console.log(second(a));
