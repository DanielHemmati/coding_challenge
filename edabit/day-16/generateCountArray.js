// https://edabit.com/challenge/xr4Xf28xeSrc7XmCF

function countdown(start) {
    return [...Array(start + 1).keys()].reverse();
}

// console.log(countdown(10));


/**
 * 
 * @param {number} start 
 */
function countdown2(start) {
    var array = [] 
    for (var i = 0; i <= start; ++i) {
        array.push(i)
    }
    return array.reverse()
}

// console.log(countdown2(5));

// console.log(Array.from(Array(10).keys()).reverse());
// // or 
// console.log([...Array(20).keys()]);

