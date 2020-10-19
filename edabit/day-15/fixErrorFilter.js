// https://edabit.com/challenge/4weFPnpgS2S5aw4aN

/**
 * 
 * @param {Array} arr 
 */
function removeEmptyArrays(arr) {
    // return arr.filter(x => x !== [])
    return arr.filter(function(x) {
        console.log(x);
        return x != false;
    })
}


var x = ["a", "b", [], []];
var y = [1, 2, [], 4];

console.log(removeEmptyArrays(x));

// console.log(x.length - 1);

// var res = []
// for (let i = 0; i < x.length; ++i) {
    //  this is false is our solution
//     if (x[i] != false) {
//         res.push(x[i])
//     }
// }

// console.log(res);