// https://edabit.com/challenge/MwLp6s75F6S5wRrEJ

/**
 *
 * @param {Array} matrix
 * @example [[a, b], [c, d]] ad-bc [[1,2], [3,4]] (1*3) - (3*2) = -2
 */
function calcDeterminant(matrix) {
    return (matrix[0][0] * matrix[1][1]) - (matrix[0][1] * matrix[1][0])
}


console.log(calcDeterminant([
  [1, 2]
  [3, 4]
]));