function past(h, m, s) {
  return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
}

console.log(past(1, 0, 1));

/* --------------------------------- second --------------------------------- */
// * this is more efficient
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
