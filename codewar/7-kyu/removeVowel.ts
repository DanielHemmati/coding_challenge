

export class Kata {
  static disemvowel(str: string): string {
    let regex = /[aeiou]/gi;
    return str.replace(regex, "");
  }
}

let input = "This website is for losers LOL!";

let res = Kata.disemvowel(input);
console.log(res);

