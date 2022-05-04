// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/typescript

class Kata {
  static getCount(str: string): number {
    let regex = /[aeiou]/g;
    return str.match(regex) !== null ? str.match(regex)!.length : 0;
  }

  static getCountSecoundVariation(str: string): number{
    return (str.match(/[aeiou]/g) || []).length;
  }

  static sl1(str: string): number {
    let regex = /[aeiou]/g;
    return [...str].filter(char => "aeiou".includes(char)).length;
  }

  // i like this one
  static sl2(str: string): number {
    console.log(str.replace(/[^aeiou]/gi, ''));
    return str.replace(/[^aeiou]/gi, '').length;
  }
}

let input = "aeiou mmmmamemom";
// console.log(Kata.getCount(input));
console.log(Kata.getCountSecoundVariation(input));
