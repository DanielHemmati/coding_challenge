// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
/**
 *
 * @param {Array} a
 */
function findOdd(a) {
  // i am ready to be suprised LOL
  if (a.lenght === 1) return a[0];
  Array.prototype.count = function (item) {
    let count = 0;
    for (let i = 0; i < this.length; ++i) {
      if (this[i] === item) {
        count++;
      }
    }
    return count;
  };
  for (let i = 0; i < a.length; ++i) {
    if (a.count(a[i]) % 2 !== 0) {
      return a[i];
    }
  }
}

let test = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
let input1 = [1, 2, 3, 3, 3, 2, 3, 1, 5];

const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);
console.log(findOdd2(input1));
