// https://www.codewars.com/kata/57238ceaef9008adc7000603

// this is really interesting
/**
 *
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 */
function colorOf(r, g, b) {
    var check = function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    return "#" + check(r) + check(g) + check(b);
}
// i mean let's go and break this shit
// console.log(colorOf(0,0,255));

//------------- other solution ------------
// i don't why slice works like that in map method???
function colorOf2(...rgb) {
    return '#' + rgb.map(function (x) {
        // return "0" + x.toString(16)
        return `0${x.toString(16)}`.slice(-2)
        // idk about this part 
    }).join('')
}

// console.log(colorOf2(0,0,255));


// const fullNumber = '2034399002125581';
// const last4digit = fullNumber.slice(-4)
// // console.log(last4digit);
// const maskedNubmer = last4digit.padStart(fullNumber.length, "*")
// console.log(maskedNubmer);

// const n = '12384081239514589249035193249832'
// const sliceit = n.slice(-4)
// console.log(sliceit);
// const res = sliceit.padStart(n.length, "*")
// console.log(res);

/**
 * 
 * @param {Number} num 
 * @param {Number} targetLength 
 */
function leftFillNum(num, targetLength) {
    // padstart is confusing man 
    return num.toString().padStart(targetLength, 0) 
}

// console.log(leftFillNum(123, 5));

//this one makes more sense 
function colorOf3(r,g,b) {
    return '#' + r.toString(16).padStart(2,0) + g.toString(16).padStart(2,0) + b.toString(16).padStart(2,0)
}

console.log(colorOf3(0,0,255));