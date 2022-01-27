// https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
/**
 *
 * @param {String} str
 */
function XO(str) {
  const char = [...str.toLowerCase()];
  const x = char.filter((char) => char === "x").length;
  const o = char.filter((char) => char === "o").length;
  return x === o ? true : false;
}

// console.log(XO("zzoo"));

/* ----------------------------- other solution ----------------------------- */

/**
 *
 * @param {String} str
 */
function second(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
console.log(second("xoxox"));
