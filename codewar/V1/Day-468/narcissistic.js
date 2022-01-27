
function narcissistic(value) {
  let res = [];
  let arrayOfNumber = [...String(value)].map(Number);
  for (let i = 0; i < arrayOfNumber.length; ++i){
    res.push(Math.pow(arrayOfNumber[i], arrayOfNumber.length));
  }
  return res.reduce((a, b) => a + b) === value ? true : false;
}

let a = 153;
console.log(narcissistic(a))
