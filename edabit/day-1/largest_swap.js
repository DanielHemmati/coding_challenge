
// https://edabit.com/challenge/hD3euqPHM82Cbr7R8

/**
 * it can be solve in a better way i am sure, but that what i come up with for now
 * @param {number} num 
 */
function largestSwap(num) {
    var reverse = num.toString().split('').reverse().join('');
    var res = parseInt(reverse, 10);
    if (num > res) return true;
    if (num < res) return false;
    if (num === res) return true;
}


console.log(largestSwap(43));

//---------- other solution ----------
