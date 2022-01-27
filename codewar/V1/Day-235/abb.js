/**
 *
 * @param {String} name
 * @returns {string}
 */
function abbrevName(name) {
  return name
    .split(" ")
    .map((char) => char.charAt(0))
    .join(".")
    .toUpperCase();
}

let input = "Sam Harris";
console.log(abbrevName(input));
