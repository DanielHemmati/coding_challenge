// https://www.codewars.com/kata/5905871c00881d0e85000015/train/javascript

/**
 *
 * @param {Array} arr
 * */
function mixFruit(arr) {
  // still have a problem with return statement. can't believe it
  let regular = ["banana", "orange", "apple", "lemon", "grapes"];
  let special = ["avocado", "strawberry", "mango"];

  return Math.round(
    arr.reduce((a, b) => {
      b = b.toLowerCase();
      if (regular.includes(b)) return a + 5;
      if (special.includes(b)) return a + 7;
      return a + 9;
    }, 0) / arr.length
  );
}

// let's write in another form
/**
 *
 * @param {Array} arr
 */
function second(arr) {
  // didn't work also :(
  let regular = ["banana", "orange", "apple", "lemon", "grapes"];
  let special = ["avocado", "strawberry", "mango"];
  var total = 0;
  let res = arr.map((item) => {
    if (regular.includes(item)) {
      console.log("am i her");
      total += 5;
    }
    if (special.includes(item)) {
      total += 7;
      // console.log("am i here");
    }
    if (!regular.includes(item) && !special.includes(item)) {
      total += 9;
    }
    return total;
  });
  return Math.round(res[res.length - 1] / arr.length);
}

// console.log(second(["watermelon", "orange"]));

/* ----------------------------- other solution ----------------------------- */
// this was my solution at first FUCK

/**
 *
 * @param {Array} arr
 */
function third(arr) {
  var prices = {
    banana: 5,
    orange: 5,
    apple: 5,
    lemon: 5,
    grapes: 5,
    avocado: 7,
    strawberry: 7,
    mango: 7,
  };
  // i should've trust myself at first
  return Math.round(
    arr.reduce((a, b) => (a += prices[b.toLowerCase()] || 9), 0) / arr.length
  );
}

console.log(third(["orange", "orange"]));
