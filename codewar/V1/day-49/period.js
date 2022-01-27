// https://www.codewars.com/kata/578a8a01e9fd1549e50001f1/train/javascript

/**
 *
 * @param {Object} last
 * @param {Object} today
 * @param {Number} cycleLength
 */
function periodIsLate(last, today, cycleLength) {
  var diffTime = Math.abs(new Date(last) - new Date(today))
  return Math.ceil(diffTime / (1000*60*60*24)) > cycleLength
}

var a = new Date(2016, 6, 13)
var b = new Date(2016, 7, 16)
console.log(periodIsLate(a,b, 35))
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28))


// const difftime = Math.abs(b - a)
// const diffDays = Math.ceil(difftime / (1000 * 60 * 60 * 24))
// console.log(diffDays)

// console.log(b - a)

// console.log(a)
// 