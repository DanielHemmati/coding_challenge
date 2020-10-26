// https://edabit.com/challenge/447bDYjW8ZBTtFG5M

/**
 *
 * @param {Number} n1
 * @param {Number} n2
 */
function both(n1, n2) {
    // i think there are more easier way than this
    // if (n1 < 0 && n2 < 0) {
    //     return true
    // } else if (n1 === 0 && n2 === 0) {
    //     return true
    // } else if (n1 > 0 && n2 > 0) {
    //     return true
    // } else {
    //     return false
    // }

    // you can write this like this also, it's much shorter
    if (n1 > 0 && n2 > 0) return true
    if (n1 < 0 && n2 < 0) return true
    if (n1 === 0 && n2 === 0) return true
    else return false
}


console.log(both(-1 , 22));
console.log(both(0 , 22));
console.log(both(22 , 0));
console.log(both(22 , 22));
console.log(both(6 , -2));
//------------- other solution ------------


function whyIdidntSeeThisLOL(n1, n2) {
    // i want to get to this point
    return Math.sign(n1) == Math.sign(n2);
}

console.log(whyIdidntSeeThisLOL(-1 , 22));
console.log(whyIdidntSeeThisLOL(0 , 22));
console.log(whyIdidntSeeThisLOL(22 , 0));
console.log(whyIdidntSeeThisLOL(22 , 22));
console.log(whyIdidntSeeThisLOL(6 , -2));