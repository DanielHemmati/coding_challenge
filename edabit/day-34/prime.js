function isPrime(num) {
    var flag = true;
    // the only i don't get is num / 2
    var foo = Math.ceil(num / 2);
    for (var i = 2; i <= foo; i++) {
        if (num % i === 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
// console.log(isPrime(11))

var res = "hello daniel how are you";

/**
 *
 * @param {Number} n1
 * @param {Number} n2
 */
function primeInRange(n1, n2) {
    var res = [];
    if (n1 < 0 || n2 < 0) return false;
    for (var i = n1; i <= n2; ++i) {
        if (isPrime(i)) {
            res.push(i);
        }
    }
    console.log(res);
    return res.length > 0 ? true : false;
}

// console.log(primeInRange(10, 15))
// console.log(primeInRange(23, 27))

//-------------other solution-------------

var res = Array.from("foo").map((item) => item.toUpperCase());
// console.log(res)
var f = Array.from("foo", (x) => x.toUpperCase());
// console.log(f)

function getArg() {
    var res = [];
    for (var i = 0; i < arguments.length; i++) {
        res.push(arguments[i]);
    }
    return res;
}

// console.log(getArg('daniel', 'hemmati', 123))

function test(foo) {
    return foo["test2"]["fname"];
}

// console.log(test('daniel', 'hemamti', 'shahin'))

var test2 = {
    0: "daniel",
    1: "hemmati",
    2: 22,
};

// var x = Array.prototype.slice.call(test2, 2)
// console.log(x)

function arrayFromArgs() {
    return Array.prototype.slice.call(arguments);
}

// console.log(arrayFromArgs('daniel', 'hemmati', 123))

// then also we have something like Array.from which
// can do all the what above code can do

function arrayFrom() {
    return Array.from(arguments);
    // we can also write
    // return Array.prototype.slice.call(arguments) but the above one is neate
}

// console.log(arrayFrom('daniel', 'hemmat'))

function advance() {
    return Array.from(arguments, (x) => x + 1);
}

// console.log(advance(1,2,3))

//------------- keep it  -------------
let doubler = {
    factor: 2,
    double(x) {
        return x * this.factor;
    },
};

let score = [5, 6, 7];
// that's how are
let newScore = Array.from(score, doubler.double, doubler);
// console.log(newScore)
//------------- imporatant -------------

// now let's see this how does this solution works
var y = Array.from({length: 22 - 11 }, (_, i) => 11 + i)
// var y = Array.from({ length: 22 - 11 },function(item, index) {
//     console.log(item)
//     // console.log(index)
// });
// console.log(y);


// let's see how does it work
function ex(n1, n2) {
    // the first part will give us a range.
    return Array.from({ length: (n2 - n1) / 2 }, (_, i) => n1 + i).filter(function (number) {
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) return false;
        }
        return true
    }).length > 0;
}

console.log(ex(62, 65))


// how to write a better range ???
function range(n1, n2) {
    // first solution
    return Array.from({length: (n2 - n1)}, (_, i) => n1 + i)
}

// console.log(range(11, 22))


// n2 > n1 always
function range2(n1, n2) {
    var list = [];
    // this is the best way in my opinion
    for (var i = n1; i <= n2; ++i){
        list.push(i)
    }
    return list;
}

// console.log(range2(11,22))

function range3(n1, n2) {
    // you can put null or nothing 
    return Array(n2 - n1 + 1).fill().map((_, i) => n1 + i)
}

// console.log(range3(11, 22))


let fillArray =  Array(10).fill('hello')
console.log(fillArray)






function primeInRange22(n1, n2) {
    return (
        Array.from({ length: (n2 - n1) / 2 }, (_, i) => n1 + i * 1).filter(
            (number) => {
                for (var i = 2; i <= Math.sqrt(number); i++) {
                    if (number % i === 0) return false;
                }
                return true;
            }
        ).length > 0
    );
}
// console.log(primeInRange22(62, 65))

// this is also my solution
function primeLastAttempt(n1, n2) {

    // if both of 
    if (n1 <= 1 || n2 <= 1) return false;

    // first get the range of number 
    var list = [];
    for (var i = n1; i <= n2; ++i){
        list.push(i)
    }
    // then find out the prime number in the list
    return list.filter(function(number) {
        // division of two makes more sense to me
        for (var i = 2; i <= Math.ceil(number / 2); ++i) {
            if (number % i === 0) return false
        }
        return true
    }).length > 0
}

// console.log(primeLastAttempt(62,65))
console.log(primeLastAttempt(11, 22))

