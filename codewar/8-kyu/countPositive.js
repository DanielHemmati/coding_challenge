/**
 *
 * @param {Array} input
 */
function countPositivesSumNegatives(input) {
  if (Array.isArray(input) || input.length === 0 || !input) {
    // better (input === null || input.length === 0)
    return [];
  }
  let sumNegative = input.reduce((a, b) => a + (b < 0 ? b : 0), 0);
  let count = input.filter((item) => item > 0).length;

  return [count, sumNegative];
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// console.log(countPositivesSumNegatives(testData));

/* --------------------------------- second --------------------------------- */
/**
 * 
 * @param {Array} input 
 */
function second(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce((acc, n) => {
    if (n > 0) acc[0]++;
    if (n < 0) acc[1] += n;
    return acc;
  }, [0, 0]); // really nice
}
console.log(second(testData));