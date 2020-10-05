// https://edabit.com/challenge/YJuhHKSmNCaKNHcD3
// let's solve this

/**
 * 
 * @param {number} number 
 */
function highestDigit(number) {
    // var res = number.toString().split('');
    return Math.max(...number.toString().split(''));
}

// console.log(highestDigit(123));


// make random x number of randome digit in array
// this is my problem which i solved 
/**
 * 
 * @param {number} item 
 * @param {number} highestNumber
 */
function randomArray(item, highestNumber) {
    var array = [];
    for (var i = 0; i < item; i++) {
        array.push(Math.floor(Math.random() * highestNumber));
    }
    // make it unique
    return [...new Set(array)];
}

//---------- other solution ----------

/**
 * 
 * @param {number} number 
 */
function highestNumber2(number) {
    // are you kidding me? that's really sneaky
    return Math.max(...`${number}`);
}


