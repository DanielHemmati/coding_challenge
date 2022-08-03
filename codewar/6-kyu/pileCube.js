
/**
 * 
 * @param {Number} m 
 * @returns 
 */
function findNb(m) {
  let res = 0;
  let n = 1;
  while (res < m) {
    res += n ** 3;
    if (res === m) {
      return n;
    }
    n++;
  }
  return -1;
}

console.log(findNb(1071225))

