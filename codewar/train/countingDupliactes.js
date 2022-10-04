
/**
 * 
 * @param {string} text 
 */
function duplicateCount(text){
  let obj = {};

  text = text.toLowerCase();
  for (let char of text) {
    obj[char] = (obj[char] || 0) + 1;
  }

  let holdChar = [];
  for (let key in obj) {
    if (obj[key] !== 1) {
      holdChar.push(String(key));
    }
  }

  return holdChar.length === 0 ? 0 : holdChar.length;
}

let a = "abcde"
let b = "aabbcde";
console.log(duplicateCount(b));

/* -------------------------------- other sol ------------------------------- */
function duplicateCount2(text){
  // great use of regex
  return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  // u can write the regex like this also /(.)\1+/g => i wrote this 😛
}

let d = "aaaaaabbbbbbb";
console.log(duplicateCount2(d));


