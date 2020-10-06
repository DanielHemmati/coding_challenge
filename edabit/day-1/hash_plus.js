// this one is cool
// https://edabit.com/challenge/ydBcGvv3n447nbxCy

/**
 * this is my solution
 * @param {string} str
 */
function hashPlusCount(str) {
    var nHash = 0;
    var nPlush = 0;
    var res = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            nHash += 1;
        }
        if (str[i] === "+") {
            nPlush += 1;
        }
    }
    res.push(nHash);
    res.push(nPlush);
    console.log(res);
}

var test_str = "##++##";
// console.log(hashPlusCount(test_str));

//---------- now let's see other solution ----------

// this one is really cooll

/**
 * question: if pound sign be at the end the output of it will be at the beginning?
 * @param {string} str
 */
function hashPlusCount2(str) {
    // if the position of plus be at the first, and pould sign at the end we will get the right output
    // other that that we get the wrong output, idk why?
    return [str.split("+").join("").length, str.split("#").join("").length];
}

// console.log(hashPlusCount2(test_str));

// second solution
/**
 *
 * @param {string} str
 */
function hashPlusCount3(str) {
    // this makes more sense to me
    return [(str.match(/#/g) || []).length, (str.match(/\+/g) || []).length];
}

console.log(hashPlusCount3(test_str));



// let's go to the next one
