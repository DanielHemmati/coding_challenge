// https://edabit.com/challenge/sjETtrGP8hYoms7vh

// solve this again 

/**
 *
 * @param {String} str
 */
function replaceThe(str) {
  // it will only remove the first the  
  let vowel = "aeiou".split('')
  let findThe = str.split(" ").indexOf("the");
  let checkVowel = str[findThe+1][0] // check the first sound 
  let strArray = str.split(' ')
  for (let i = 0; i < vowel.length; ++i) {
    if (vowel[i] === checkVowel) {
      strArray[findThe] = "an"
    } else {
      strArray[findThe] = "a"
    }
  }
  return strArray.join(" ")
}

let a = "daniel the great";
// let res = a.split(" ")
let test = "ae";
let vowel = "aeiou";
// console.log(replaceThe(a))
// console.log(replaceThe(a));
// console.log(replaceThe("the dog and the envelope"))




//------------- this solution is crazy ------------  

// 
const replaceThe = str => str.replace(/the (?= [aeiou])/g, "an").replace(/the/g, 'a')
// that's really cool man
const replaceThe = str => str.replace(/the (?= [aeiou])/g, "an").replace(/the/g, 'a')
