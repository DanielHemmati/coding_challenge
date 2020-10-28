// https://edabit.com/challenge/4LnwAC3kgTctc7r3k

/**
 *
 * @param {Array} arr
 */
function oddProduct(arr) {
    // okay i didn't know that product in english is * i thought we should get the
    // sum of them
    // return arr.reduce((accumulator, currnetValue) => accumulator + currnetValue)
}

var arr = [1, 2, 3];
// console.log(oddProduct([3, 4, 1, 1, 5]));

/**
 *
 * @param {Array} arr
 */
function oddProduct2(arr) {
    return arr.filter((item) => item % 2 !== 0).reduce((a, b) => a * b);
}

/**
 *
 * @param {Array} arr
 */
function oddProduct3(arr) {
    // you can also give the init value of 1 if you want. 
    // and it does affect for getting the product of whole array
    return arr.reduce((acc, a) => a % 2 !== 0 ? acc * a : acc)
}

console.log(oddProduct3([1,1,3,5]));

/**
 *
 * @param {Array} arr
 */
function reduceIntro(arr) {
    return arr.reduce(function (accumulator, currnetValue) {
        // it's like a for-loop just fancier, but i rahter for-loop
        console.log(currnetValue);
    });
}

// console.log(reduceIntro(arr));
