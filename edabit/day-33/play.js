function isPrime(num) {
    var flag = true;
    for (var i = 2; i <= Math.ceil(num / 2); i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
console.log(isPrime(11))

console.log("i wnated this from ")


