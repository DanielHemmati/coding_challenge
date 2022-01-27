// https://www.codewars.com/kata/559ac78160f0be07c200005a/train/javascript

/**
 *
 * @param {String} str
 */
function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

// console.log(nameShuffler("daniel hemmati"));

/* ----------------------- just testing this solution ----------------------- */

// let a = "yo my man what the hell is this shit";
let a = "daniel hemmati";
// console.log(a.match(/([^\s]+)/g));

console.log(a.replace(/([^\s]+) ([^\s]+)/, `$2 $1`));
const nameShuffler = (str) => str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);
