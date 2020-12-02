// https://www.codewars.com/kata/58dced7b702b805b200000be/train/javascript
// we learn this in high school

/**
 *
 * @param {Object} a
 * @param {Object} b
 */
// damn son
function distanceBetweenPoints({ x: x1, y: y1 }, { x: x2, y: y2 }) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}
