// https://edabit.com/challenge/8A9E8LdE6zXcmPX3W

/**
 * 
 * @param {Array} arr 
 */
function getExtension(arr) {
    return arr.map(function (item) {
        return item.match(/[^.]+$/g).join('')
    })
}

console.log(getExtension(['daniel.hemmati', 'mina.sabzian']));
// i want to use regex
// var string = "daniel.hemmait"
// var regex = /[^.]+$/g;
// var res = string.match(regex)
// console.log(res);