// https://www.codewars.com/kata/54147087d5c2ebe4f1000805/train/javascript

/**
 *
 * @param {Boolean} bool
 * @param {Function} func1
 * @param {Function} func2
 */
function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

console.log(
  _if(
    true,
    function () {
      console.log("True");
    },
    function () {
      console.log("false");
    }
  )
);
