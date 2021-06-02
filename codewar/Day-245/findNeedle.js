/**
 *
 * @param {Array} haystack
 * @returns {String}
 */
function findNeedle(haystack) {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}

let input = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
console.log(findNeedle(input));

/* --------------------- there should be better solution -------------------- */
// FUCK

const second = () =>
  "found the needle at position " + haystack.indexOf("needle");
