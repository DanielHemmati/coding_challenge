

let string = "daniel hemmati"
let regex = /(\w+) (\w+)/g;
let res = string.replace(regex, "$2 $1"); // this exactly
console.log(res)