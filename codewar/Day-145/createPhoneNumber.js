// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

/**
 *
 * @param {Array} numbers
 */
function createPhoneNumber(numbers) {
  return `(${numbers.slice(0, 3).join("")}) ${numbers
    .slice(3, 6)
    .join("")}-${numbers.slice(6).join("")}`;
}

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

/**
 *
 * @param {Array} number
 */
function secondSolutoin(number) {
  let mask = "(xxx) xxx-xxxx";

  // really cool
  number.forEach((item) => {
    mask = mask.replace("x", item);
  });

  return mask;
}

console.log(secondSolutoin([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
