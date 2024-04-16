// https://www.codewars.com/kata/59b44d00bf10a439dd00006f/train/javascript

/**
 * 
 * @param {Array} arr 
 */
function sumContinuous(arr) {
  let a = [];
  // slice is expensive for spce
  for (let i = 0; i < arr.length; i++){ 
    a.push(arr.slice(0, i + 1).reduce((a, b) => a + b));
  }
  return a;
}

const b = [1, 2, 3, 4, 5];
// console.log(sumContinuous(b))
// console.log(b[-1] + 1)

// second solution
/**
 * 
 * @param {Array} arr 
 */

function sumContinuous2(arr) {
  let a = [arr[0]];
  for (let i = 1; i < arr.length; i++){
    console.log(`i=${i}, a[i - 1]=${a[i - 1]}, arr[i]=${arr[i]}`);
    a.push(a[i - 1] + arr[i]);
  }
  return a;
}

console.log(sumContinuous2(b))
