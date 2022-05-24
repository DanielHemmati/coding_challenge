// https://www.codewars.com/kata/546e2562b03326a88e000020/train/typescript

export class Kata {
  static squareDigits(num: number): number {
    let numToString = String(num);
    let res = '';
    for (let i = 0; i < numToString.length; ++i){
      res += String(Math.pow(Number(numToString[i]), 2));
    }
    return +res;
  }
  //------------- other solution -------------
  static second(num: number): number {
    return +num.toString().split('').map(n => Math.pow(+n, 2)).join("");
  }
}


let input = 9119;

// console.log(Kata.squareDigits(input));
console.log(Kata.second(input));