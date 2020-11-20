// laerning more about for ... of and for ... in

var a = ["daniel", "hemmmati", "hello there"];

function foo() {
  for (var key of arguments) {
    console.log(key);
  }
}

// console.log(foo('dniale', 'hemati', 'age', 22))

function array(arr) {
  var res = [];
  for (const key of arr) {
    res.push(key);
  }

  return typeof res;
}

// console.log(array(a))

function string(str) {
  for (var key of str) {
    console.log(typeof key);
  }
}

// console.log(string('daniel'))

var two = [
  ["a", 1],
  ["b", 2],
  ["c", 3],
];

function twoD(arr) {
  // first way
  // for (const key of arr) {
  //   for (const i of key) {
  //     console.log(i)
  //   }
  // }

  // second way => but which one is better ??
  // that's really convienient that we can do that
  for (const [key, value] of arr) {
    console.log(`the key is === ${key} and the the value is ${value}`);
  }
}

// console.log(twoD(two))
// so what is the difference between the for ... of and for ... in

Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () { };

const iter = [1,2,3, 'daniel', 'hemmati']
iter.foo = 'hello'

// this will give us the key
for (const i in iter) {
  console.log(i)
}

console.log('\n')
setTimeout(function() {
  console.log('wait')
   
}, 1000)



// this will give us the value
for (var i of iter) {
  console.log(i)
}

// for (const key in iter) {
//   if (iter.hasOwnProperty(key)) {
//     console.log(key)
//   }
// }
