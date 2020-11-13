
// https://edabit.com/challenge/9GcCezhbB3DxoJ6fL

/**
 * 
 * @param {String} str 
 */
function isInOrder(str) {
    return str.split('').sort().join('') === str ? true : false;
}

console.log(isInOrder('edabit'))


var a = [1,2,3]
var b = [1,2,3]
// console.log(JSON.stringify(a) === JSON.stringify(b))


var y = "aaa"
var x = 'aaa'
// console.log(y === x )


//------------- other solution -------------


function first(str) {
    // i don't like to write like this  
    return str === str.split('').sort().join('')
}


function second(str) {
    // i like this one, i forgot to use [...]
    return [...str].sort().join('') === str
}

/**
 * 
 * @param {String} str 
 */
function third(str) {
    // this one is really good but long
    str = str.split("")
    for (let i = 0; i < str.length; ++i) {
        if (str[i].charCodeAt(0) > str[i+1].charCodeAt(0)) return false
    }
    return true
}


// console.log(third('edabit'))
