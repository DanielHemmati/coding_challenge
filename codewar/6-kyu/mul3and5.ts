class Challenge {
  static solution(number: number) {
    if (number <= 0) return;
    let res = [];
    for (let i = 0; i <= number; ++i) {
      if (i % 3 === 0 || i % 5 === 0) {
        res.push(i);
      }
    }
    console.log(res);
    return res.reduce((a, b) => a + b, 0);
  }
}

// const test = Challenge.solution(9);
// console.log(test);

//------------- other solution -------------
function solution2(n: number) {
  if (n <= 0) return;

  return [...Array(n).keys()]
    .filter((item) => {
      return item % 3 === 0 || item % 5 === 0;
    })
    .reduce((a, b) => a + b, 0);
  // return [...Array(n)]
  //   .map((_, i) => i)
  //   .filter((value, index) => index % 3 === 0 || index % 5 === 0)
  //   .reduce((a, b) => a + b, 0);
}

console.log(solution2(9));
