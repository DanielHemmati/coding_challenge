function digit(n) {
  // let add = Array.from(n.toString(), Number).reduce((a, b) => a + b, 0);
  // return add.toString().length >= 2
  //   ? add
  //       .toString()
  //       .split("")
  //       .map(Number)
  //       .reduce((a, b) => a + b)
  //   : add;
  // or n.toString() or String(n)
  if ((n + "").length === 1) return n;
  const spreadThem = [...String(n)];
  const addThem = spreadThem.reduce((a, b) => a + Number(b), 0);
  return digit(addThem);
}

console.log(digit(123189));
