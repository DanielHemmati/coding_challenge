// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

/**
 *
 * @param {String} words
 */
function order(words) {
  return words
    .split(" ")
    .sort((a, b) => {
      // this is crazy
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

// i can't believe that we can do that
let test = "tlhisr2 i3s dae1nil";

// console.log(order(test));

// let a = "daniel hemm1ati";
// let b = "shahin sabi2zian";
// let res = b.match(/\d/g) - a.match(/\d/);
// console.log(res);

/* ----------------------------- second solution ---------------------------- */

/**
 *
 * @param {String} word
 */
function second(word) {
  let array = word.split(" ");
  let sortedArray = [];
  for (let i = 0; i <= array.length; ++i) {
    for (let j = 0; j < array.length; ++j) {
      if (array[j].indexOf(i) >= 0) [sortedArray.push(array[j])];
    }
  }
  return sortedArray;
}

console.log(second(test));
