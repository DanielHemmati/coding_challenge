// https://edabit.com/challenge/Tu2PuZf8yXQAE6kFD


/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @param {Number} c 
 */
function abcmath(a, b, c) {
    // var res = 1;
    // var holdValue;
    // for (let i = 0; i < b; i++) {
    //     res += a
    // }
    // return res
    for (let i = 0; i <= b; i++) {
		a = a + a;
    }
    return a % c === 0
}

// console.log(abcmath(43, 5))

//------------- just this solution -------------

// see boys, don't skip school. i feel so idiot rn :()
// why i didn't saw that.
const abcmath2 = (a, b, c) => (a * Math.pow(2, b)) % c === 0;
