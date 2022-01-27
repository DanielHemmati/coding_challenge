// https://app.codesignal.com/arcade/intro/level-2/xzKiBHjhoinnpdh6m/solutions?solutionId=Dd2BGF5F95BajT4WF 
// i don't understand how that .slice(1) part works
function solution(arr) {
  return Math.max(...arr.slice(1).map((x, i) => [x*arr[i]]));
}

let a = [4, 1, 2, 3, 1, 5];
// console.log(Math.max(...a.slice(1).map((x, i) => [x*a[i]])))
console.log(Math.max(...a.slice(1)))

// console.log(solution(a));
