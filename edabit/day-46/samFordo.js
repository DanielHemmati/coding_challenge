// https://edabit.com/challenge/ZqxDxzZK6Fm9uW6MF

/**
 *
 * @param {Array} arr
 */
function middleEarth(arr) {
  // return Math.abs(arr.indexOf('sam') - arr.indexOf('Frodo')) > 1 ? true : false
  // return arr.indexOf('sam') - arr.indexOf('Frodo') === 1 ? true : false
  if (Math.abs(arr.indexOf("Sam") - arr.indexOf("Frodo")) === 1) {
    return true;
  }
  return false;
}

// console.log(middleEarth(["Frodo", "Sam", "Gandalf"]))
// console.log(middleEarth(["Frodo", "Saruman", "Sam"]))
// console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"]))

var a = ["Frodo", "Saruman", "Sam"];
var b = ["Frodo", "Sam", "Gandalf"];
// console.log(Math.abs(a.indexOf('Sam') - a.indexOf('Frodo')) > 1)
// console.log(Math.abs(b.indexOf('Sam') - b.indexOf('Frodo')) > 1)

//------------- other solution -------------

// this is my favorite solution
function first(arr) {
  return /SamFrodo|FrodoSam/.test(arr.join(""));
}

console.log(first(a));
console.log(first(b));
