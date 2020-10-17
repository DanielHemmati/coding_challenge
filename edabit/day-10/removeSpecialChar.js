// https://edabit.com/challenge/k7CwrsKPHrEL8h4z6

/**
 *
 * @param {String} str
 */
function removeSpecialCharacters(str) {
    // finally this is the solution
    return str.replace(/[^a-zA-Z0-9\-\_ ]/g, "")
}

// i want to learn more about regex, let's go
console.log(removeSpecialCharacters("hello #$@#world!"));

// didn't worked 
// return str.replace(/[&\/\\#,+()$~%.'":*?<>@{}]/g, '');
// return str.replace(/[^a-zA-Z ]/g, "");
// return str.replace(/[^\w\d\s]/g, "");