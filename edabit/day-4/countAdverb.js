// https://edabit.com/challenge/sjeXqkCFvv6qSchtA
// this is hard but i am gonig to try


/**
 * 
 * @param {String} sentence 
 * @returns {Number} 
 */
function countAdverbs(sentence) {
    // i don't have a elegant solution with regex :( 
    let array = sentence.split(' ');
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        // this is my best shot and it worked 
        if (array[i].endsWith('ly') || array[i].endsWith('ly,') || array[i].endsWith('ly.')) {
            count += 1
        }
    }
    return count;
}

// it took way more than i expected
let string = 'dainel soly soly soly have '

// console.log(countAdverbs(string));
//---------- other solution ----------

