// https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118/train/javascript
// ⭐

function distinct(a) {
  return Array.from(new Set(a));
}

let a = [1];
console.log(distinct(a));


/* ---------------------------------- other --------------------------------- */
function second(a) {
  return [...new Set(a)]; // this is also possible
}