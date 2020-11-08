
let input1 = ["Joe"]
let input2 = ["Angela", "Joe"]
let input3 = ["Frank", "Angela", "Joe"]

/**
 * 
 * @param {Array} names 
 */
function greetPeople(names) {
    var res = []
    for (var i = 0; i < names.length; ++i) {
        res.push("Hello " + names[i])
    }
    return res.join(", ")
}

// console.log(greetPeople(input2))

// can we do that with map
/**
 * 
 * @param {Array} names 
 */
function greetPeople2(names) {
   return names.map(x => "Hello " + x).join(", ")
}

console.log(greetPeople2(input2))

