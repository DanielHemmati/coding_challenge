// https://edabit.com/challenge/8fnEAEj5vKNqAXNYA


/**
 * 
 * @param {Array} arr 
 * @param {String} type 
 */
function filterStateNames(arr, type) {
    if (type === "abb") {
        return arr.filter((item) => item.length === 2)
    }
    return arr.filter((item) => item.length > 2)
}

console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"))
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"))
console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb"))
console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full"))

function oneLine(arr, type) {
    return type === "abb" ? arr.filter((item) => item.length === 2) : arr.filter((item) => item.length > 2)
}