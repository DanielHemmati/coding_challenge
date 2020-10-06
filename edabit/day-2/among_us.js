
// https://edabit.com/challenge/ihpAv2EBCxDD27T3P


/**
 * 
 * @param {number} i 
 * @param {number} p 
 */
function imposterFormula(i, p) {
    return `${Math.round(100 * (i / p))}%`;
}
console.log(imposterFormula(1, 9));
