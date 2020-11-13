

// https://edabit.com/challenge/YjkNx49pk7Eois9pi

/**
 * 
 * @param {String} str 
 */
function isSafeBridge(str) {
    return str.split(" ").length > 1 ? false : true;
}

console.log(isSafeBridge('## ###'))


//------------- other solution -------------


// i like this one also
function isSafeBridge2(str) {
    return !str.includes(' ') 
}

console.log(isSafeBridge2("#####"))

