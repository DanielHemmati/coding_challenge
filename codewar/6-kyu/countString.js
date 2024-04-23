// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

/**
 * 
 * @param {string} string 
 * @returns 
 */
function count(string) {
  const res = {};
  // string.split("").forEach((char) => {
  //   res[char] = res[char] ? res[char] + 1 : 1;
  // })
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    res[char] = res[char] ? res[char] + 1 : 1;
  }
  return res;
}

console.log(count("aba"));
