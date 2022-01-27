// for practice

// it's so ugly
function digit(n) {
  let add = Array.from(n.toString(), Number).reduce(
    (prev, element) => prev + element,
    0
  );
  return add;
}

function powerTWo(n) {
  let add = digit(n);
  let res = Array.from(add.toString(), Number)
    .map(function (item) {
      return Math.pow(item, 2);
    })
    .join("");
  let addAgain = digit(+res);
  return addAgain + add;
}

console.log(digit(64));
console.log(powerTWo(64));

// // let a = 123;
// // let res = Array.from(a.toString(), Number);
// // console.log(res);
// let a = 123;
// console.log(a.toString().length);

// // console.log(digit(64));

// function lengthInNumber(n) {}
