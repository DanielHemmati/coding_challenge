export const findOdd = (xs: number[]): number => {
  let count = {} as typeof xs;

  for (let i = 0; i < xs.length; ++i){
    if (count[xs[i]]) {
      count[xs[i]] += 1;
    } else {
      count[xs[i]] = 1;
    }
  }

  for (const [key, value] of Object.entries(count)) {
    if (value % 2 !== 0) {
      return +key;
    }
  }

  return 0;
};

let input = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
console.log(findOdd(input));

// let uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
// var count:any = {};
// uniqueCount.forEach(function(i:any) { count[i] = (count[i]||0) + 1;});
// console.log(count);