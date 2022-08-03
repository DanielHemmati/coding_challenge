// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/javascript

/**
 *
 * @param {Array} busStops
 */
const number = function (busStops) {
  let flatArray = busStops.flat();
  let evenAdd = 0;
  let oddAdd = 0;

  for (let i = 0; i < flatArray.length; i++) {
    if (i % 2 == 0) {
      evenAdd += flatArray[i];
    } else {
      oddAdd += flatArray[i];
    }
  }

  return evenAdd - oddAdd;
};

let a = [
  [10, 0],
  [3, 5],
  [5, 8],
];
// console.log(number(a))

/* ----------------------------- other solution ----------------------------- */
/**
 *
 * @param {Array} busStops
 */
// realy nice solution
const second = (busStops) => {
  return busStops.reduce((rem, [on, off]) => {
    console.log(`rem=${rem} on=${on} and off=${off}`);
    return rem + on - off;
  }, 0);
};
// console.log(second(a))

/**
 * 
 * @param {Array} busStops 
 */
const withOutFlat = (busStops) => {
  let total = 0;
  for (let i = 0; i < busStops.length; i++){
    total += busStops[i][0];
    total -= busStops[i][1];
  }
  return total;
}
