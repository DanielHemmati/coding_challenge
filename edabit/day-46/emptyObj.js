// https://edabit.com/challenge/nGybgqB9agSqvBszF

/**
 *
 * @param {object} obj
 */
function isEmpty(obj) {
  return Object.keys(obj).length === 0 ? true : false;
}

var a = {
  name: "daniel",
  lname: "hemmati",
};
var b = {};

/**
 *
 * @param {object} a
 */
function test(a) {
  for (var key in a) {
    if (a.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

//------------- other solution -------------

/**
 *
 * @param {object} obj
 */
function first(obj) {
  // this is shorter and much better
  return !Object.keys(obj).length
}