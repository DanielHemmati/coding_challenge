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

// console.log(getExtension(['daniel.hemmati', 'mina.sabzian']));

//------------- other solution ------------
/**
 * 
 * @param {Array} arr 
 */
function getExtension2(arr) {
    // return arr.map(item => item.split('.')[1]) 
    return arr.map(item => item.split('.').pop()) 
}

console.log(getExtension2(['daniel.hemmati', 'mina.sabzian']));