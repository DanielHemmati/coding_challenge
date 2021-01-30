// https://www.codewars.com/kata/5905871c00881d0e85000015/train/javascript

/**
 *
 * @param {Array} arr
 * */
function mixFruit(arr) {
  //
  const allFruit = {
    Banana: 5,
    Orange: 5,
    Apple: 5,
    Lemon: 5,
    Grapes: 5,
    Avocado: 7,
    Strawberry: 7,
    Mango: 7,
  };

  var total = 0;
  let res = arr
    .map((item) => {
      for (let key in allFruit) {
        if (item === key) {
          total += allFruit[item];
        }
      }
      if (!allFruit.hasOwnProperty(item)) {
        total += 9;
      }
      return Math.round(total / 3);
    })
    .join("");
  return res;
}

console.log(mixFruit(["watermelon"]));
