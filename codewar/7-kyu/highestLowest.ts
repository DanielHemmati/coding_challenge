export class Kata {
  // solved
  static highAndLow(numbers: string): string | void {
    if (numbers.length === 0) return;
    let numbersToArray = numbers.split(" ").map((n) => +n);

    let highest = Math.max(...numbersToArray);
    let lowest = Math.min(...numbersToArray);

    return `${highest} ${lowest}`;
  }

  // this was neater, i kind of like typescript
  static second(n: string): string{
    const max = Math.max(...n.split(" ").map(i => +i));
    const min = Math.min(...n.split(" ").map(i => +i));

    return `${max} ${min}`;
  }
}

let input = "8 3 -5 42 -1 0 0 -9 4 7 4 -4 -1";
console.log(Kata.highAndLow(input));
