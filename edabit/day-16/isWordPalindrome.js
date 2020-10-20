// https://edabit.com/challenge/zvFri3sia4iNPTeqC

// https://itnext.io/11-way-to-check-for-palindromes-in-javascript-85dbfe7dfb5d
// this article is so cool, but hey that's too much LOL

/**
 *
 * @param {String} str
 */
function checkPalindrome(str) {
    // this is where i have to learn more algorithm and DS
    return str === str.split("").reverse().join("") ? true : false;
}

// console.log(checkPalindrome("daniel"));

/**
 * 
 * @param {String} str 
 */
function checkPalindrome2(str) {
    return [...str].reverse().join('') === str
}

// console.log(checkPalindrome2("dad"));

