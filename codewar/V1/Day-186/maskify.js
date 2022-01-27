const str1 = "4";
// console.log(str1.padStart(22, "0"));

// return masked string
/**
 *
 * @param {String} cc
 */
function maskify(cc) {
  if (cc.length === 1 || cc.length === 3) return cc;
  if (!cc.length) return "";
  return (
    [...cc]
      .slice(0, [...cc].length - 4)
      .join("")
      .replace(/\w/g, "#") + cc.slice(-4)
  );
}
let a = "4bc";
// console.log(typeof a.slice(-4));
console.log(maskify(a)); // :|
// let x = [...a].slice(0, [...a].length - 4);
// console.log(x.join("").replace(/\w/g, "#"));
// console.log(maskify("4556364607935616"));

/* -------------------------- why i didn't do this -------------------------- */
// :|
function second(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
