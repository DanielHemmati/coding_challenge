// https://www.codewars.com/kata/56f1c6034d0c330e4a001059/train/javascript

const generateColor = () => {
  const char = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let res = "#";
  for (let i = 0; i < 6; ++i) {
    res += char[Math.floor(Math.random() * char.length)];
  }
  return res;
};

// console.log(generateColor());

// we don't need that bitwise or operator we, see below
function generateColor2() {
  return `#${(0 | (Math.random() * 0xeeeeee + 0x111111)).toString(16)}`;
}

console.log(generateColor2());
console.log((0xeeeeee).toString(16));
console.log(
  String((Math.random() * 0xeeeeee + 0x111111).toString(16)).split(".")[0]
);
