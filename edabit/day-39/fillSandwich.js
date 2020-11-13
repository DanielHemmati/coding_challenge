// https://edabit.com/challenge/W8z2EghwmjQYhwM2D

/**
 *
 * @param {Array} sandwich
 */
function getFillings(sandwich) {
    return sandwich.slice(1, sandwich.length - 1);
}

var test = ["shahin", "ham", "cheese", "ham", "idaniel"];
// delete test[0]
// delete test[test.length -1 ]
// console.log(test.length)

console.log(test.slice(1, test.length - 1));
