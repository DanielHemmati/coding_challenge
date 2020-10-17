// https://edabit.com/challenge/Wq3Q5ewau9Fu2GN9i

/**
 * 
 * @param {String} str 
 */
function removeFirstLast(str) {
    if (str.length <= 2) return str;
    return str.substring(1, str.length - 1) 
}

console.log(removeFirstLast('shahin'));