
// https://edabit.com/challenge/vCtepsfrE7Nts2a9j

/**
 * 
 * @param {string} str1
 * @param {string} str2
 */
function hammingDistance(str1, str2) {
  var res = 0;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) {
      res += 1
    }
  }
  return res
}

// console.log(hammingDistance("abcde", "bcdef"))
// console.log(hammingDistance("abcde", "abcde"))
// console.log(hammingDistance("strong", "strung"))


/**
 * 
 * @param {Array} a 
 * @param {Array} b 
 */
function hamming(a, b) {
  // let's try different solution
  return [...a].filter((item, index) => item !== b[index]).length // enjoy :coolface: shit it emoji doesn't work in feodra
}

console.log(hamming("abcde", "bcdef"))
console.log(hamming("abcde", "abcde"))
console.log(hamming("strong", "strung"))




