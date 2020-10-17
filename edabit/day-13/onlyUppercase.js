// https://edabit.com/challenge/TDpT9tvwJK5uLn98h

/**
 *
 * @param {String} str
 */
function sameCase(str) {
    if (str.toUpperCase() === str) return true;
    if (str.toLowerCase() === str) return true;
    return false;
}

// console.log(sameCase('DANIr'));
// research, exactly one hours on this. conclusion ==> think simple
// * i have an idea. charcode from 65 utnil 90, all of them are uppercase
// * or we can check if the string is equal to uppercase of itself
// * or we can use regex
// * lol it's much simpler than that 😂

// var upperA = "A".charCodeAt(0); // 65
// var upperZ = "Z".charCodeAt(0); // 90
// var lowerA = "a".charCodeAt(0); // 97
// var lowerZ = "z".charCodeAt(0); // 122
//---------- othere solution ----------

/**
 * 
 * @param {String} str 
 */
function sameCase2(str) {
    // much better
    return str.toUpperCase() === str || str.toLowerCase() === str; 
}

// console.log(sameCase2('daniel'));

// and yeah you can do it with regex 
function sameCase3(str) {
    // you have to say from beginning ^ to the end $ with +
    return /^[A-Z]+$/g.test(str) ||  /^[a-z]+$/g.test(str)
}
console.log(sameCase3('danie'));