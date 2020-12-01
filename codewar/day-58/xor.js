//https://www.codewars.com/kata/56fa3c5ce4d45d2a52001b3c/train/javascript

let input1 = false;
let input2 = false;
let input3 = true;
let inupt4 = true;

function xor(a, b) {
  return a ^ b ? true : false;
}

// console.log(xor(true, true));

/* ----------------------------- other solution ----------------------------- */

// this one are better
function first(a, b) {
  // this is really good man
  return a !== b;
}

// console.log(first(input1, input2));

// or we can implement the XOR itself
function second(a, b) {
  return (a || b) && !(a && b);
}

console.log(second(input1, input2));
