// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript

/**
 *
 * @param {string} text
 * @returns
 */
const orderedCount = function(text) {
  let obj = {}, order = {};

  for (let [i, char] of [...text].entries()) {
    console.log(`i=${i} char=${char}`);
  }
};

let a = "abracadabra";
let b = "233312";
// console.log(orderedCount(b))

var second = function (text) {
  const counts = {}, order = {};
  
  for (const [i, char] of [...text].entries()){
    if (!(char in counts)) {
      counts[char] = 0;
      order[char] = i;
    }
    counts[char]++;
  }

  // right now my question is why we have to sort?
  // why object.entries() output in order form? i don't get it
  return Object.entries(counts).sort((a, b) => order[a[0]] - order[b[0]]);
}
// console.log(second(b))

/**
 * 
 * @param {string} text 
 */
const third = (text) => {
  return [...new Set(text)].map(val => [val, text.split(val).length - 1]);
}

let aa = "abracadabra";
console.log(aa.split("a"))
