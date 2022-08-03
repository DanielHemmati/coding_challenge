// https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript
// https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript
// https://math.stackexchange.com/questions/1343171/why-only-square-root-approach-to-check-number-is-prime?newreg=5be05d7b845f470d982530a0da679a3a



function isPrime(num) {
  if (num <= 0) {
    return false;
  }

  const s = Math.sqrt(num); // see the link above for proof
  for (let i = 2; i <= s; i++){
    if (num % i === 0) {
      return false;
    }
  }
  // > 1 b/c 1 is not prime
  return num > 1;
}
let a = 8
console.log(isPrime(a));