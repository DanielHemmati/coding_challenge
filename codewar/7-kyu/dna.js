// training again
function DNAStrand(dna) {
  let comp = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  let res = "";
  let a = [...dna].map((item) => comp[item]);
  console.log(a);
}

// really nice, really good
// console.log(DNAStrand("ATTGC"));

//------------- other solution -------------

let comp = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

/**
 * 
 * @param {string} dna 
 * @returns 
 */
function second (dna){
  // i fucking love this
  return dna.replace(/./g, c => comp[c]);
}
console.log(second("ATTGC"));
