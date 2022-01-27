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
  // instead of Number you can use + also
  const addThem = spreadThem.reduce((a, b) => a + Number(b), 0);
  return digit(addThem);
}

// console.log(digit(123189));

/* ----------------------------- other solutioni ---------------------------- */

// how ?? check below explanation
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

/**
 * If you struggle with understanding:

In modulo 9 arithmetic any number multiplied by 10 is the same number. We can show that by proving that any number's remainder of dividing by 9 is the same as a remainder from dividing the same number multiplied by 10:

n = 9k + l // any number can be represented as k multiplicity of 9 and l remainder
10n = 90k + 10l
10n = 90k + 9l + l
10n = 9(10k + l) + l // the remainder is also l
With that, we can write any number like so:

1234 = 1 * 10^3 + 2 * 10^2 + 3 * 10 + 4
which in modulo 9 arithmetic is equivalent to

1 + 2 + 3 + 4
So, in mod 9 arithmetic any number is equal to sum of its digits, and also to sum of that sum's digits, and so on...
 */
