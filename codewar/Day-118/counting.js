// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
/**
 *
 * @param {String} text
 */
// other ways to write this ???
function duplicateCount(text) {
  const arr = text.toLowerCase().split("");
  let result = [];
  for (let i = 0; i < text.length; ++i) {
    if (arr.slice(i + 1).includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  // console.log(result);
  // console.log(Array.from(new Set(result)));
  // or
  return [...new Set(result)].length;
}

// console.log(duplicateCount("aabcdeee"));
/**
 *
 * @param {String} text
 */
function second(text) {
  let arr = text
    .toLowerCase()
    .split("")
    .sort((a, b) => a.localeCompare(b));

  console.log(arr);
  let res = {};
  let count = 0;
  for (let i = 0; i < text.length; ++i) {
    if (arr[i] === arr[i + 1]) {
      res[arr[i]] = count + 1;
    }
  }
  return Object.keys(res).length;
}

// console.log(second("abcdefghijABCDEABCDABCABA"));

// let work = "abcdefghijABCDEABCDABCABA";
// let res = work.toLocaleLowerCase();
// console.log(res.split("").sort((a, b) => a - b));

function compare(strA, strB) {
  // console.log("i am strA " + strA);
  console.log("i am strB " + strB);
  var icmp = strA.toLowerCase().localeCompare(strB.toLowerCase());
  if (icmp != 0) {
    // spotted a difference when considering the locale
    return icmp;
  }
  // no difference found when considering locale, let's see whether
  // capitalization matters
  if (strA > strB) {
    return 1;
  } else if (strA < strB) {
    return -1;
  } else {
    // the characters are equal.
    return 0;
  }
}
let test = "CCAADDaabb";
test = test.toLowerCase().split("");
// test = test.sort(compare);
// console.log(test);

var str1 = "ab";
var str2 = "ab";
var n = str1.localeCompare(str2);
// console.log(n);
// console.log(["x", "a", "b", "c", "d"].sort((a, b) => a.localeCompare(b)));

// var str = "ACBacbA";
// str = str.toLowerCase().split("");
// str = str.sort(compare);
// str = str.join("");
// console.log(str);

// shortest answer
/**
 *
 * @param {String} text
 */
const duplicate = (text) => (text.toLowerCase().match(/([^]\1+)/) || []).length;
console.log(duplicate("aaabbbb"));

// damn i learned a lot with this question
