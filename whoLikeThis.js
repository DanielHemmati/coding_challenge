// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

/**
 *
 * @param {Array} names
 */
function likes(names) {
  if (names.length === 0) return "no one likes this";
  for (var i = 0; i < names.length; ++i) {
    if (names.length === 1) {
      return `${names[i]} likes this`;
    } else if (names.length === 2) {
      return `${names[i]} and ${names[i + 1]} like this`;
    } else if (names.length === 3) {
      return `${names[i]}, ${names[i + 1]} and ${names[i + 2]} like this`;
    } else {
      return `${names[i]}, ${names[i + 1]} and ${
        names.slice(i + 2).length
      } others like this`;
    }
  }
}

// console.log(likes(["max", "john", "daniel"]));

// let test = ["Alex", "Jacob", "Mark", "Max", "daniel"];
// let res = ["Alex"];
// console.log(likes(res));

// let res = test.slice(2);
// console.log(res);

/* --------------------------- best solution ever --------------------------- */
// this one just broke me
// lol
/**
 *
 * @param {Array} names
 */
function likes2(names) {
  return {
    0: "no one likes this",
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)];
}

let s = { name: "daniel", age: 22 }["name"];
console.log(s);
