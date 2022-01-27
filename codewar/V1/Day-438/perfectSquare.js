/**
 *
 * @param {Number} sq
 * @returns Number ???
 */
function findNextSquare(sq) {
  const isSquare = (n) => {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  if (isSquare(sq)) {
    return Math.pow(Math.sqrt(sq) + 1, 2);
  }

  return -1;
}

// console.log(findNextSquare(121));

/* --------------------------------- oneline -------------------------------- */

/**
 *
 * @param {Number} sq
 */
function findNextSquareOneLine(sq) {
  return Math.sqrt(sq) % 1 !== 0 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

console.log(findNextSquareOneLine(121));

const test =
  Math.pow(2, 2) === 4 ? console.log("helllo daniel") : console.log("a");
