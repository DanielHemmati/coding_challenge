// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/javascript

/**
 * 
 * @param {Array} data 
 */
function openOrSenior(data){
  let res = [];
  for (let i = 0; i < data.length; ++i){
    if (data[i][0] >= 55 && data[i][1] > 7) {
      res.push("Senior")
    } else {
      res.push("Open")
    }
  }
  return res;
}
const a = [[45, 12], [55, 21], [19, -2], [104, 20]];
// console.log(openOrSenior(a))

/* -------------------------- OS === other solution ------------------------- */
/**
 * 
 * @param {Array} data 
 */
function second(data) {
  // that's really cool
  return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? "Senior" : "Open");
}
console.log(second(a))
