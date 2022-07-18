// https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

/**
 *
 * @param {Number} integer
 */
function divisors(integer) {
  let div = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i === 0) {
      div.push(i);
    }
  }
  return div.length > 1 ? div : `${integer} is prime`;
}

let input = 11;
console.log(divisors(input));

let test = Array.from({ length: 5 }, (_, i) => i + 1).slice(1);
console.log(test);

// other solution
// i like this 
function divisors(int) {
  const arr = Array.from({ length: int - 1 }, (_, i) => i + 1)
    .slice(1)
    .filter((el) => int % el === 0);
  return arr.length ? arr : `${int} is prime`;
}
