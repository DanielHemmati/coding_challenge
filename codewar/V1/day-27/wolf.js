// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

/**
 *
 * @param {Array} queue
 */
function warnTheSheep(queue) {
    let index = queue.findIndex((wolf) => wolf === "wolf");
    return queue[queue.length - 1] === "wolf"
        ? "Pls go away and stop eating my sheep"
        : `Oi! Sheep number ${
              queue.length - index - 1
          }! You are about to be eaten by a wolf!`;
}

// it does some new challenges
var a = ["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"];
var daniel = ["daniel", "hemmati", "mina"];

var res = a.findIndex((x) => x === "wolf");
// ah that's sweet, we can use this
// console.log(a.length - res -1 );
console.log(warnTheSheep(a));

// console.log(a.lastIndexOf('wolf'));
// console.log(daniel.lastIndexOf('mina'));
// console.log(daniel.indexOf('mina'));
// var res = daniel.findIndex(function (el) {
//     return el === 'mina'
// })

// console.log(res);
// it took some good amounf of time bro
//------------- other solution ------------
// let's go for the next one

