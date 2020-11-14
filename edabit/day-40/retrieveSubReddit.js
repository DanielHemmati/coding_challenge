// https://edabit.com/challenge/WT5MGmgaP3jvx8qpt

var input1 = "https://www.reddit.com/r/funny/";

/**
 * 
 * @param {String} link 
 */
function subReddit(link) {
    // i don't have better solution, let's see how others solve this
    var linkArray = link.split('/')
    if (linkArray[linkArray.length - 1] === '') return linkArray[linkArray.length - 2];
    else return linkArray[linkArray.length - 1]
}

// console.log(subReddit("https://www.reddit.com/r/funny/"))
// console.log(subReddit("https://www.reddit.com/r/relationships/"))


//------------- other solution -------------
// ahhhh i was in the right track
// but i use negative number instead LOL

function first(link) {
    // lol
    return link.split("/")[4]
}


/**
 * 
 * @param {String} link 
 */
function second(link) {
     return link.match(/\/r\/(\w+)/)[1];
    // okay that make sense
    // return link.match(/\/r\/(\w+)/);
}

// console.log(second(input1))



