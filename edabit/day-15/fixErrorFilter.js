// https://edabit.com/challenge/4weFPnpgS2S5aw4aN

/**
 *
 * @param {Array} arr
 */
function removeEmptyArrays(arr) {
    // return arr.filter(x => x !== [])
    return arr.filter(function (x) {
        console.log(x);
        return x != false;
    });
}

var x = ["a", "b", [], []];
var y = [1, 2, [1,23], 4];

// console.log(removeEmptyArrays(x));

// console.log(x.length - 1);

// var res = []
// for (let i = 0; i < x.length; ++i) {
//  this is false is our solution
//     if (x[i] != false) {
//         res.push(x[i])
//     }
// }

// console.log(res);

//---------- other solution ----------

// this one is really elegant
function removeEmptyArrays2(arr) {
    return arr.filter((x) => x.length !== 0);
}

// console.log(removeEmptyArrays2(y));

// i don't like to use this for this challenge x.length is much better
// console.log(Array.isArray([1,2,3]));

function removeEmptyArrays3(arr) {
    // isArray is overkill. basically x.length will solve the problem
    return arr.filter(x => !Array.isArray(arr) || x.length !== 0) 
}

console.log(removeEmptyArrays3(y));