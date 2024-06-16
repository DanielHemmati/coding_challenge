// https://www.codewars.com/kata/53697be005f803751e0015aa/train/javascript
const encodeRule = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

/**
 *
 * @param {string} string
 * @returns
 */
function encode(string) {
  let res = "";
  for (let i = 0; i < string.length; i++){
    let char = string[i];
    if (char.match(/[aeiou]/g)) {
      res += encodeRule[char];
    } else {
      res += char;
    }
  }
  return res;
}

const decodeRule = {
  1: 'a',
  2: "e",
  3: 'i',
  4: 'o',
  5: 'u'
}
/**
 *
 * @param {string} string
 * @returns
 */
function decode(string) {
  let res = "";
  for (let i = 0; i < string.length; i++){
    const char = string[i];
    if (char.match(/[12345]/g)) {
      res += decodeRule[char];
    } else {
      res += char;
    }
  }
  return res;
}

const getKeyByValue = (object, value) => Object.keys(object).find(key => object[key] === value);

let a = "hello";
// console.log(encode(a));
// console.log(decode('h2ll4'))
// console.log(getKeyByValue(rule, 1))

// second solution

// loved this solution

/**
 * 
 * @param {string} string 
 */
function encode2(string) {
  return string.replace(/[aeiou]/g, (x) => "_aeiou".indexOf(x));
}

/**
 * 
 * @param {*} string 
 * @returns 
 */
function decode2(string) {
  return string.replace(/[aeiou]/g, (x) => "_aeiou".charAt(x));
}

// console.log(decode('h2ll4'))


// third sol
const table = ['a', 'e', 'i', 'o', 'u']
const encode3 = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode3 = string => string.split('').map(x => table[Number(x) - 1] || x).join('')

console.log(decode3("h2ll4"))
console.log(table[Number('2') - 1])