// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

/**
 *
 * @param {String} word
 */
const sortString = (word) => {
  return word
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
};

/**
 *
 * @param {String} word
 * @param {Array} listOfWords
 */
function anagrams(word, listOfWords) {
  let sortInput = sortString(word);
  let holdSortedList = [];
  for (let i = 0; i < listOfWords.length; i++) {
    holdSortedList.push(sortString(listOfWords[i]));
  }

  return holdSortedList.filter((item) => item === sortInput);
}

let a = "bbaa";
let b = ["aabb", "abcd", "bbaa", "dada"];
// console.log(anagrams(a, b));

// aboev solution is good but it won't work on this challenge

/**
 *
 * @param {String} word
 * @param {Array} listOfWords
 */
// filter doesn't mutate the array buddy
function anagrams2(word, listOfWords) {
  return listOfWords.filter((item) => {
    return item.split("").sort().join("") === word.split("").sort().join("");
  });
}
console.log(anagrams2(a, b));


let c = { 'a': 2, 'b': 2 };
let d = { 'a': 2, 'b': 2 };
console.log(JSON.stringify(c) === JSON.stringify(d))