// https://edabit.com/practice/session

function repeat(item, times) {
  let res = [];
  for (let i = 0; i < times; ++i) {
    res.push(item);
  }
  return res;
}

console.log(repeat("dani", 2));
