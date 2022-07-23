// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript


const reverse = (str) => str.split("").reverse().join("");
function spinWords(str){
  let res = [];
  let splitStr = str.split(' ');

  for (let i = 0 ; i < splitStr.length; i++){
    if (splitStr[i].length >= 5) {
      res.push(reverse(splitStr[i]));
    } else {
        res.push(splitStr[i])
    }
    
  }
  return res.join(" ")
}


// console.log(spinWords("Welcome"));

let a = "Hey fellow warriors";
// console.log(spinWords(a));


// above one works, let's make it better
//
/**
 * @param {String} str
 */
function second(str) {
    return str.split(" ").map(word =>word.length >=5 ? word.split("").reverse().join("") : word).join(" ");
}

console.log(second(a));

