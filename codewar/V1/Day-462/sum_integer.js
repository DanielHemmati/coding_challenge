// https://www.codewars.com/kata/598f76a44f613e0e0b000026/train/javascript

/**
 * 
 * @param {String} s 
 * @returns 
 */
function sumOfIntegersInString(s){
  return s.match(/\d+/g).map(Number).reduce((a, b) => a + b, 0);
}

const txt = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog";
console.log(sumOfIntegersInString(txt))

