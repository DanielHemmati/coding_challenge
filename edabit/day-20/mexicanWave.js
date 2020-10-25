// we are on the fedora, let's go

/**
 * this is hard
 * @param {String} str
 */
function wave(str) {
    return str.split('').map(function (letter, index, arr) {
        return `${arr.slice(0, index)}${letter.toUpperCase()}${arr.slice(index + 1, arr.length)}`.replace(/,/g, "")
    })
}
// console.log('daniel'.charAt(0).toUpperCase());

// console.log(wave('blue'));


const wave2 = (str) => {
    return str.split('').map(function (letter, index, arr) {
        // return `${arr.slice(index + 1, arr.lengthj)}`
        return `${arr.slice(0, index)}${letter.toUpperCase()}${arr.slice(index+1, arr.length)}`.replace(/,/g, '')
    })
}
// console.log(wave2('daniel'));
var string = 'daniel hemmati'
var res = string.split('').map(function (letter, index, arr) {
    // this is really nice
    return `${arr.slice(0, index)}${letter.toUpperCase()}${arr.slice(index + 1, arr.length)}`.replace(/,/g, '')
})
// console.log(res);
//------------- other solution ------------


/**
 * 
 * @param {String} str 
 */
// why i haven't done this 
function wave3(str) {
    var resArray = [];
    if (str === '') return resArray;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            resArray.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length))
        }
    }
    return resArray
}

// console.log(wave3('daniel'));
