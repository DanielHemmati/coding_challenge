// https://edabit.com/challenge/5vz5mrd7BTd7Q7XSz
// this is so cool
/* this is what we should do
tidyBooks([
  "     The Catcher in the Rye - J. D. Salinger    ",
  "    Brave New World - Aldous Huxley   ",
  "    Of Mice and Men - John Steinbeck    "
]) ➞ [
  "The Catcher in the Rye", "J. D. Salinger",
  "Brave New World", "Aldous Huley",
  "Of Mice and Men", "John Steinbeck"
]
*/

var testArray = [
    ["   Death of a Salesman - Arthur Miller    "],
    ["   Macbeth - William Shakespeare    "],
    ["    A Separate Peace - John Knowles     "],
    [" Lord of the Flies - William Golding"],
    ["A Tale of Two Cities - Charles Dickens"],
];
var testArray2 = ["     The Catcher in the Rye - J. D. Salinger    ",
    "    Brave New World - Aldous Huxley   ",
    "    Of Mice and Men - John Steinbeck    "];

// console.log(testArray2[0].split(' ').join('').split('-'));

/**
 *
 * @param {Array} arr
 */
// my solution
function tidyBooks(arr) {
    var resArray = [];
    for (var i = 0; i < arr.length; ++i) {
        resArray.push(arr[i][0].trim().split(' - '));
    }
    return resArray;
}

// console.log(testArray[2][0]);
// let chunked = [[1], [4], [7]];

// var resArray = [];
// var string = "";
// for (var i = 0; i < testArray.length; ++i) {
//     resArray.push(testArray[i][0].trim().split('-'))
//     // string += testArray[i][0].trim().split('-')
// }

// // console.log(resArray);


