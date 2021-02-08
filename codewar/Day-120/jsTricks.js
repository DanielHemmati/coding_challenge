// generate number between range
let start = 1900;
let end = 2000;
let generateRandome = {
  newArray: [...new Array(end + 1).keys()].slice(start),
  ArrayFrom: Array.from({ length: end - start + 1 }, (_, i) => start + 1),
};

const arrays = [[10], 50, [100, [2000, 3000, [40000]]]];
let flatArray = {
  flatten: arrays.flat(Infinity),
};

// const test = false;
// const res = test ?? "daenil";
// console.log(res);

// function A() {
//   console.log("A was called");
//   return undefined;
// }
// function B() {
//   console.log("B was called");
//   return false;
// }
// function C() {
//   console.log("C was called");
//   return "foo";
// }

// console.log(A() ?? C());
