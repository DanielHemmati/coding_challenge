// i solve it in a differnet way
/**
 *
 * @param {Array} numbers
 */
function createPhoneNumber(numbers) {
  console.log(numbers.slice(0, 3));
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(createPhoneNumber(a));
