// https://www.codewars.com/kata/566fc12495810954b1000030/train/typescript
export class G964 {
  public static nbDig(n: number, d: number): number {
    let arrayOfNumber = [];
    for (let i = 0; i <= n; i++) {
      arrayOfNumber.push(i);
    }

    let powerOfTwo = arrayOfNumber.map((item) => item ** 2).map(String);
    let filteredArray = powerOfTwo
      .filter((item) => item.includes(d.toString()))
      .join("");

    let excludeD = [...filteredArray].filter(item => item === d.toString()).length;

    return excludeD;
  }
}

let n = 10;
let d = 1;

let n1 = 25;
let d1 = 1;

let res = G964.nbDig(n1, d1);
console.log(res);
