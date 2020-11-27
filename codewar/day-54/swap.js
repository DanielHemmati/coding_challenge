// https://www.codewars.com/kata/5388f0e00b24c5635e000fc6/train/javascript

function swapValues() {
  // var args = Array.prototype.slice.call(arguments);
  var args = [...arguments];
  // console.log(args);

  // var temp = args[1];
  // args[1] = args[0];
  // args[0] = temp;
  // console.log(args);
  // this one is really good
  [args[0], args[1]] = [args[1], args[0]];

  return args;
}

// console.log(swapValues(1, 2));

let a = [7, 2];
var b = a[1];
a[1] = a[0];
a[0] = b;
// console.log(b);
// console.log(a);

// i found the solution which i mean what the hell
function second(array) {
  return array.reverse();
}

// this is not what proble wanted from us
console.log(second([1, 2]));
