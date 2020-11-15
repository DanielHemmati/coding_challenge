
// https://edabit.com/challenge/GLbuMfTtDWwDv2F73

/**
 * 
 * @param {Array} arr 
 */
function countTrue(arr) {
    if (arr.length === 0) return 0;
    var res = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === true) {
            res.push(arr[i])
        }
    }
    return res.length
}

var input1 = [true, false, false, true, false]
// console.log(input1)

// console.log(countTrue(input1))

/**
 * 
 * @param {Array} arr 
 */
function countTrue2(arr) {
    // also my solution
    return arr.filter((item) => item === true).length
}

console.log(countTrue2(input1))


//------------- other solution -------------

// why i always forget to put Boolean in there
const countTrue = (arr) => arr.filter(Boolean).length;
