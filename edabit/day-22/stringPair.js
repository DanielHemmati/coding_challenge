// https://edabit.com/challenge/WBdjg7zgiqi6L5zsL

/**
 *
 * @param {String} str1
 * @param {String} str2
 */
function isStrangePair(str1, str2) {
    return str1[0] === str2[str2.length - 1] && str1[str1.length - 1] === str2[0]
}

var x = "daniel";
var y = "laaad";
// console.log(x[0] === y[y.length -1 ]);
// console.log(isStrangePair('ratio', 'orator'));

// console.log(x[0] === y[y.length]);
// console.log(y[y.length - 1]);
// console.log(y.length);
