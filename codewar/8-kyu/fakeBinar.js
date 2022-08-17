// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

/**
 * 
 * @param {string} x 
 */
function fakeBin(x){
  return [...x].map(item => item < 5 ? "0" : "1").join("")
}


let a = "6611";
console.log(fakeBin(a))