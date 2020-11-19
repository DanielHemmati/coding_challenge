// https://edabit.com/challenge/PqriC6CkLE5JW57aW

/**
 *
 * @param {Array} arr
 */
function oddeven(arr) {
  var odd = arr.filter((item) => item % 2 !== 0).length;
  var even = arr.filter((item) => item % 2 === 0).length;
  return odd > even ? true : false
}

console.log(oddeven([1, 2, 3, 4, 5, 6, 7, 8, 9]))
console.log(oddeven([1]))
console.log(oddeven([13452394823795273847528572346]))


//------------- other solution -------------
// shit this solution is amazing 

/**
 * 
 * @param {Array} arr 
 */
function oddeven2(arr) {
  // hah it's so cool or you can write it like a third one G
  return arr.filter(item => item % 2 !== 0).length > arr.length / 2
}


/**
 * 
 * @param {Array} arr 
 */
function oddeven3(arr) {
  return 2*arr.filter(item => item % 2 !== 0).length > (arr.length)
}



