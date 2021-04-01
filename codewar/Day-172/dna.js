// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript

/**
 *
 * @param {String} dna
 */
// this works
function DNAStrand(dna) {
  const pair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  let res = "";
  for (let i = 0; i < dna.length; ++i) {
    for (let char in pair) {
      if (char === dna[i]) {
        res += pair[char];
      }
    }
  }
  return res;
}

let a = "AAAA";
let b = "ATTGC";
let c = "TTTT";
// console.log(DNAStrand(b));

/* ----------------------------- other solution ----------------------------- */
/**
 *
 * @param {String} dna
 */
function second(dna) {
  const pair = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  // that's much better
  return [...dna].map((char) => pair[char]).join("");
}
console.log(second(a));
