// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript

/**
 *
 * @param {String} sentence
 */
function spEng(sentence) {
  return /English/gi.test(sentence);
}

let a = "danielEnglish";
// console.log(/English/g.test(a));
console.log(spEng(a));
