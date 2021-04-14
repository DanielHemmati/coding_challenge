// couldn't solve it

// the problem was broken
function tribonacci(signature, n) {
  let res = [...signature];

  if (n === 0) return [];
  if (n === 1) return [1];
  if (n === 2) return [result[0], result[1]];

  for (let i = 3; i < n; ++i) {
    let trib;

    if (i === 3) {
      trib = res[0] + res[1] + res[2];
    } else {
      trib = res[i - 1] + res[i - 2] + res[i - 3];
    }

    res.push(trib);
  }
  return res;
}

console.log(tribonacci([1, 2, 3], 30));
