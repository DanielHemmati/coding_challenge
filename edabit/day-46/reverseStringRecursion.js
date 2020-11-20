
/**
 * 
 * @param {string} string 
 */
// function reverse(string) {
//   if (string.endsWith < 2 ) return string
  
//   return reverse(string.slice(1, string.length)) + string[0]
// }

var str = "hello world";
var res = str.slice(1, str.length) + str[0]

console.log(res)

console.log(str.split('').reverse().join(''))



 
function reverse(string) {
  // Base case
  if (string.length < 2) return string;
  // Recursive case
  // return reverse(string.slice(1, string.length)) + string[0];
  return reverse(string.slice(1, string.length))
}

// console.log(reverse(str))
