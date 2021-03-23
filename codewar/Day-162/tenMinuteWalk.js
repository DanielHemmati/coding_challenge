/**
 *
 * @param {Array} walk
 * @returns boolean
 */
function isValidWalk(walk) {
  // it was stupid
  const count = (walk, dir) => walk.filter((item) => item === dir).length;
  return (
    walk.length === 10 &&
    count(walk, "s") === count(walk, "n") &&
    count(walk, "e") === count(walk, "w")
  );
}

let a = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"];
let b = ["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"];
console.log(isValidWalk(a));
