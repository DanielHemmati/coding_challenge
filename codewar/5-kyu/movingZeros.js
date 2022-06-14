// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

/**
 *
 * @param {Array} arr
 * @returns
 */
function moveZeros(arr) {
  let countZeros = arr.filter((item) => item === 0).length;
  let removeZeros = arr.filter(item => item !== 0);
  for (let i = 0; i < countZeros; ++i){
    removeZeros.push(0);
  }
  return removeZeros;
}

let a = [1, 2, 0, 1, 0, 1, 0, 3, 0, 1];
// console.log(moveZeros(a))

// the better sol is 
/**
 *
 * @param {Array} arr
 * much shorter and nicer
 */
function second(arr) {
  let countZeros = arr.filter((item) => item === 0);
  let removeZeros = arr.filter(item => item !== 0);
  return removeZeros.concat(countZeros);
}

console.log(second(a));
