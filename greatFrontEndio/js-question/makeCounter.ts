
function makeCounter(initialValue: number = 0): () => number {
  return function () {
    return initialValue++;
  };
}

let a = makeCounter();
console.log(a());
console.log(a());
console.log(a());
