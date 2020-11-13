
// https://edabit.com/challenge/ALmkPHd7eoe5btx9y

/**
 * 
 * @param {Number} year 
 */
function isLeap(year) {
    // the order yo right it, is important
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.log(isLeap(2000))
