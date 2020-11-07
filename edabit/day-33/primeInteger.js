// https://edabit.com/challenge/mLLqf6apACKBLF3Pe

function isPrime(num) {
    var flag = true;
    // the only i don't get is num / 2
    var foo = Math.ceil(num/2)
    for (var i = 2; i <= foo; i++) {
        if (num % i === 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
console.log(isPrime(11))

var res = "hello daniel how are you"


/**
 *
 * @param {Number} n1
 * @param {Number} n2
 */
function primeInRange(n1, n2) {
    var res = []
    if (n1 < 0 || n2 < 0) return false;
    for (var i = n1; i <= n2; ++i) {
        if (isPrime(i)) {
            res.push(i)
        }
    }
    console.log(res);
    return res.length > 0 ? true : false
}

// console.log(primeInRange(10, 15))
console.log(primeInRange(23, 27))

// this are different version that you can use 
const isPrime2 = (num) => {
    let count = 2;
    while (count < num / 2 + 1) {
        if (num % count !== 0) {
            count++;
            continue;
        }
        return false;
    }
    return true;
};
const primeBetween2 = (a, b) => {
    //    let count = 0;
    var res = [];
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        if (isPrime(i)) {
            res.push(i);
        }
    }
    return res;
};
// console.log(primeBetween(2, 21));
