// https://www.codewars.com/kata/520b9d2ad5c005041100000f/solutions/javascript

// my sol
function strAy(str) {
  return str.slice(1) + str[0] + "ay";
}
/**
 * 
 * @param {string} str 
 */
function pigIt(str) {
  let arrStr = str.split(" ");
  let res = [];
  for (let i = 0; i < arrStr.length; i++){
    if (/\w+/g.test(arrStr[i])) {
      res.push(strAy(arrStr[i]));
    } else {
      res.push(arrStr[i]);
    }
  }
  return res.join(" ");
}

let b = 'Pig latin is cool !';
// console.log(pigIt(b));

/* -------------------------------- other sol ------------------------------- */
/**
 * 
 * @param {string} str 
 */
function second(str) {
  // TODO: check how does * and $ works in here
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3");
}

// console.log(second(b));


function third (str){
  return str.replace(/\w+/g, (w) => {
    // i did this without replace and that was my problem
    return w.slice(1) + w[0] + "ay"; 
  }) 
}

