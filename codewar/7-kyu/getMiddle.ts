export class Challenge {

  static getMiddle(s: string) {

    if (!s) {
      return "";
    }

    let middle = Math.floor(s.length / 2);


    if (s.length % 2 === 0) {
      return s[middle - 1] + s[middle];
    }


    return s[middle];
  }
}

let input = "test";
// helo
console.log(Challenge.getMiddle(input));

