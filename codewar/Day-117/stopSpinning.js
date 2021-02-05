// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
/**
 *
 * @param {String} str
 */
function spinWords(str) {
  // TODO: do this, and that also
  return str
    .split(" ")
    .map((item) =>
      item.length >= 5 ? item.split("").reverse().join("") : item
    )
    .join(" ");
}
// console.log(spinWords("hey fellow warriors"));

/* ----------------------------- other solution ----------------------------- */
// this one is good

// this is cool
const reverseWord = (word) => [...word].reverse().join("");
const spingWords2 = (string) => string.replace(/\w{5,}/g, reverseWord);

console.log(spingWords2("hello fellow warriors "));
