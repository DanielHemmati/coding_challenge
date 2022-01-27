
const prevMultOfThree = n => {
  while (n % 3) {
    n = Math.floor(n / 10);
  }
  return n || null;
}

// const a = 12.6;
// console.log(Math.floor(a))
let n = 1244;
console.log(typeof Number(n.toString().slice(0, -1)))
// console.log(prevMultOfThree(1))