let a = 4;
let b = 6;
console.log(Number.isInteger(Math.sqrt(b)));

// this is the solution
var isSquare = function (n) {
  return n === -1 ? false : Number.isInteger(Math.sqrt(n));
};
