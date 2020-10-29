// https://www.codewars.com/kata/57238ceaef9008adc7000603


// this is really interesting
/**
 * 
 * @param {Number} r 
 * @param {Number} g 
 * @param {Number} b 
 */
function colorOf(r,g,b){
    var check = function (c) {
        var hex = c.toString(16)
        return hex.length == 1 ? '0' + hex : hex
    }
    return '#' + check(r) +check(g) + check(b)
}
// i mean let's go and break this shit
console.log(colorOf(0,0,255));
