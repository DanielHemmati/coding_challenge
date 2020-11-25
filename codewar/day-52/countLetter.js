

/**
 * 
 * @param {String} str 
 */
function lowercaseCount(str){
  // that was challenging in a good way
  return str.match(/[a-z]/g) === null || str === "" ? 0 : str.match(/[a-z]/g).length
}

var str = "dani!@#$!#@!##!El"
var  x ="abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"
var a = "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~"
var y = ''
// var res = str.match(/[a-zA-z]/gi).length
// console.log(lowercaseCount(a))

//------------- other solution -------------

// this one is my fav
/**
 * 
 * @param {String} str 
 */
function first(str) {
  // i could do this but i didn't knew this 
  return (str.match(/[a-z]/) || []).length
}


function second(str){
  // yeah we could also do this 
  return str.replace(/[^a-z]/g, "").length;
}


