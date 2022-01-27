// https://www.codewars.com/kata/57f75cc397d62fc93d000059/train/javascript
/**
 *
 * @param {String} x
 */
function calc(x) {
  let total1 = x
    .split("")
    .map((item) => item.charCodeAt())
    .join("")
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  let total2 = x
    .split("")
    .map((item) => item.charCodeAt())
    .join("")
    .replace(/7/g, "1")
    .split("")
    .map(Number)
    .reduce((a, b) => a + b, 0);

  return Math.abs(total1 - total2);
}

// console.log(calc("ABC"));
//------------- other solutio -------------
/**
 *
 * @param {String} x
 */
function calc2(x) {
  let sum = (n) => [...n].reduce((a, b) => +a + +b);
  // atleast we learned something
  let total1 = x.replace(/./g, (x) => x.charCodeAt());
  // let total1 = x.replace(/./g, (d) => {
  //   return d.charCodeAt();
  // });
  let total2 = total1.replace(/7/g, "1");
  return sum(total1) - sum(total2);
}

console.log(calc2("ABC"));

// let str = "daniel hemmati";
// let res = str.replace(/h/g, (d) => d.charCodeAt());
// console.log(res);
