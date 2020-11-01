/**
 *
 * @param {String} d
 * @param {Array} a
 */
function forPractice(d, a) {
    // this will solve it
    return a.sort((x, y) => (d === "R" ? x - y : y - x));
}

var numbers = [4, 2, 5, 1, 3];
console.log(forPractice("R", numbers));



// var res = numbers.sort(function (a, b) {
//     // return a - b;
//     // return b - a
// });

// console.log(res);
