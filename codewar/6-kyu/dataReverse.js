// https://www.codewars.com/kata/569d488d61b812a0f7000015/train/javascript

function dataReverse(data) {
  let splitByEight = data.map(String).join("").match(/.{8}/g, data);
  return splitByEight.reverse().join("").split("").map(Number);
}


let input = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0];

console.log(dataReverse(input))