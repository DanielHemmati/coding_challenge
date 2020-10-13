// https://edabit.com/challenge/Qc8k4WX2Gi4uSYR5A

/**
 *
 * @param {string} phrase
 * @param {Array} arr
 */
function hangman(phrase, arr) {
    return [...phrase]
        .map(function (char) {
            return /[a-z]/i.test(char) && !arr.includes(char.toLowerCase())
                ? "-"
                : char;
        })
        .join("");
}

// research part right now it's day 8, but i am will put this on day7
// it doesn't matrer

var arr = ["a", "d"];
var ph = "daniel";
// console.log(hangman(ph, arr));

/**
 *
 * @param {String} phrase
 * @param {Array} arr
 */
function hangman2(phrase, arr) {
    return [...phrase]
        .map(function (char) {
            if (/[a-z]/i.test(char)) {
                return !arr.includes(char.toLowerCase()) ? "-" : char;
            }
        })
        .join("");
}
console.log(hangman2(ph, arr));

var array = [0, 4, 3, 5];

function randomArrayGenerator(item, hn) {
    let array = [];
    // this is so cool
    for (let i = 0; i < item; ++i) {
        array.push(Math.floor(Math.random() * hn))
    }
    return array;
}