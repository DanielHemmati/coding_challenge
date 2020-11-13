

// this what we are going to do
// highLow("1 2 3 4 5") ➞ "5 1"
// highLow("1 2 -3 4 5") ➞ "5 -3"
// highLow("1 9 3 4 -5") ➞ "9 -5"
// highLow("13") ➞ "13 13"

/**
 * 
 * @param {String} str 
 */
function highLow(str) {
    var makeArray = str.split(" ")
    var low = Math.min(...makeArray)
    var high = Math.max(...makeArray)
    return high + " " +low
}


// does this make it better 
// hello theresfdsfsfsfsfsfsf
// no it seems that it's works perfectly

// hello guys, how you doing??
// you can work i know
// are we okay?? i think this one is much better
console.log(highLow('1 2 3 4 5'))