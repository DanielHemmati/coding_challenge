
// https://edabit.com/challenge/5FhabpvT3FF75kgCi

/**
 * 
 * @param {String} str 
 * @param {String} ch 
 */
function replaceVowels(str, ch) {
    return str.replace(/[aeiou]/ig, ch)
}

console.log(replaceVowels("the aardvark", "#"))
