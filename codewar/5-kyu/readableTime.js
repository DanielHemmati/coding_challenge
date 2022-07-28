/**
 *
 * @param {number} time
 * @returns {string}=> am i
 */
function humanReadable(time) {
  let hours = parseInt(time / 3600);
  let minute = parseInt(time / 60) % 60;
  let second = time % 60;

  const pad = (val) => {
    return val < 10 ? "0" + val : val;
  };
  return `${pad(hours)}:${pad(minute)}:${pad(second)}`;
}

console.log(humanReadable(3600));

// function test(seconds) {
//   var hours = parseInt(seconds / 3600);
//   var minutes = parseInt(seconds / 60) % 60;
//   var seconds = seconds % 60;

//   var pad = function (val) {
//     return val < 10 ? "0" + val : val;
//   };

//   return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
// }

// console.log(test(3599));