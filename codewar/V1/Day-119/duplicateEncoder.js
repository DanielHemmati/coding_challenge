// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
/**
 *
 * @param {String} word
 */
function duplicateEncode(word) {
  var holdMyWord = word;
  for (let i = 0; i < word.length; ++i) {
    if (
      [...holdMyWord].indexOf(word[i]) === [...holdMyWord].lastIndexOf(word[i])
    ) {
      word = word.replace(word[i], "(");
    } else {
      word = word.replace(word[i], ")");
    }
  }
  return word;
}

let str = "recede";
// console.log(duplicateEncode(str));
console.log(str.replace(/[^]{1,}/g, ")"));

// let res = [...str].indexOf("e") === [...str].lastIndexOf("e");
// console.log([...str].lastIndexOf("e"));
// short version
const duplicateEncode2 = (word) => {
  return word
    .toLowerCase()
    .split("")
    .map((item, _, arr) => {
      return arr.indexOf(item) === arr.lastIndexOf(item) ? "(" : ")";
    })
    .join("");
};

// console.log(duplicateEncode2("recede"));
// console.log([..."recede"].indexOf("c") === [..."recede"].lastIndexOf("c"));
