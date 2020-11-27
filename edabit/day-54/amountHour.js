// https://edabit.com/challenge/CFszCxtcmqAsgZdw8
/**
 *
 * @param {String} t1
 * @param {String} t2
 */
function hoursPassed(t1, t2) {
  if (t1 === t2) return "no time passed";
  let t1Array = t1.split(" ");
  let t2Array = t2.split(" ");

  let t2n2 = +t2Array[0].substr(0, 1);
  let t1n1 = +t1Array[0].substr(0, 1);

  if (t2Array[1] === "PM" && t1Array[1] === "AM") {
    return `${t2n2 + 12 - t1n1} hours`;
  } else if (t2Array[1] === "AM" && t1Array[1] === "PM") {
    return `${t1n1 + 12 - t2n2} hours`;
    // } else if () {
  } else {
    return `${Math.abs(t2n2 - t1n1)} hours`;
  }
}

console.log(hoursPassed("3:00 AM", "3:00 AM"));

let input1 = "3:00 AM";
let input2 = "5:00 PM";
let input3 = "3:00 PM";
// let input4 = "4:00 PM";
// console.log(parseInt(input1));

// console.log(hoursPassed(input1, input2));
// console.log(hoursPassed(input3, input4));
// console.log(hoursPassed("3:00 AM", "3:00 AM"));

/* ----------------------------- other solution ----------------------------- */

// i couldn't solve it. one test case fails always
// okay i jsut found out that i didn't consider the fact that when itme is 12 in AM
// we should update the time to zero, even i had problem with time in school

// okay this solution makes the most sense to me
/**
 *
 * @param {String} t1
 * @param {String} t2
 */
function hoursPassed2(t1, t2) {
  var a = parseInt(t1);
  var b = parseInt(t2);
  if (t1.endsWith("PM")) {
    a += 12;
  } else if (a === 12) {
    a = 0;
  }
  if (t2.endsWith("PM")) {
    b += 12;
  } else if (b === 12) {
    b = 0;
  }
  if (a === b) return "no time passed";
  return `${Math.abs(b - a)} hours`;
}

console.log(hoursPassed2("12:00 AM", "10:00 PM")); // i had problem with this test case
