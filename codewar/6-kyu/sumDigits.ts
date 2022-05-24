// https://www.codewars.com/kata/541c8630095125aba6000c00/train/typescript

// i did with recursion
export const digitalRoot = (n: number): number => {
  if (String(n).length === 1) {
    return n;
  }
  // your code here
  return digitalRoot(
    n
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0)
  );
};

let input = 456;
// console.log(digitalRoot(input));

// really clever
function second(n: number): number {
  // i don't how they got this solution thought
  return ((n - 1) % 9) + 1;
}
// console.log(second(input));

function third(n: number): number {
  while (n >= 10) {
    n = n
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b, 0);
  }
  return n;
}

console.log(third(input));
