// https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript

/**
 * 
 * @param {Array} n
 */
function removeSmallest(n) {
  if (!n.length) {
    return [];
  }
  let copy = n.slice(0);// copy array like this my man
  let minItem = copy.indexOf(Math.min(...copy));
  let removeItem = copy.splice(minItem, 1);
  return copy;
}

let a = [1, 2, 3, 4, 5, 1]
// console.log(removeSmallest(a));

/* --------------------------------- second --------------------------------- */
// that's really nice
/**
 * 
 * @param {Array} n 
 */
function second(n) {
  let minIndex = n.indexOf(Math.min(...n));
  return [...n.slice(0, minIndex), ...n.slice(minIndex + 1)];
}

console.log(second(a));
