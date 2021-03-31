//https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript
/**
 *
 * @param {String} song
 * @returns
 */
function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim();
}

let a = "AWUBBWUBC";
let b = "WUBAWUBBWUBCWUB";
console.log(songDecoder(b));
