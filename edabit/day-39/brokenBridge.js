

// https://edabit.com/challenge/YjkNx49pk7Eois9pi

/**
 * 
 * @param {String} str 
 */
function isSafeBridge(str) {
    return str.split(" ").length > 1 ? false : true;
}

console.log(isSafeBridge('## ###'))

