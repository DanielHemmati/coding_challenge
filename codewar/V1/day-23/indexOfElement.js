// https://www.codewars.com/kata/5703c093022cd1aae90012c9

/**
 *
 * @param {Array} array
 * @param {Number} element
 */
function find(array, element) {
    // they want short answer. oh my god
    var x = array.indexOf(element)
    return x < 0 ? "Not found" : x
}

// console.log(find(["daniel", "hemmati"], "daniel"));

// this is the solution
/**
 * 
 * @param {Array} array 
 * @param {Number} element 
 */
const find2 = (array, element) => array.includes(element) ? array.indexOf(element) : "Not found"


// nice
console.log(find2(['dnaiel', 'hemmati', 'shahin'], 'hemmati'));
