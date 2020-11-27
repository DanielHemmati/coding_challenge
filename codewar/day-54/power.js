//https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript

/**
 *
 * @param {Number} number
 * @param {Number} power
 */
function numberToPower(number, power) {
  // no ** or math stuff
  let holdMyBeer = 1;
  for (let i = 1; i <= power; ++i) {
    holdMyBeer *= number;
  }

  return holdMyBeer;
}

console.log(numberToPower(2, 2));
// it took me some time  to realize that i have to use for looop
