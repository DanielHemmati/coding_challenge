// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/javascript

/**
 *
 * @param {String} d
 * @param {Array} a
 */
const flip = (d, a) => {
    // if (d === "R") {
    //     return a.sort();
    // } else {
    //     return a.sort().reverse()
    // }
    // there is a error called deeply equal, i don't get it
    return d === "R" ? a.sort() : a.sort().reverse()
};

console.log(flip("R", [3,2,1,2]));
console.log(flip('L', [1, 4, 5, 3, 5]))

//------------- other soltion ------------
// why this work and not for me??? i don't get it
const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);
