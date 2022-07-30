// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript
const handleHex = (value) => {
  let hex = value.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};

function rgb(r, g, b) {
  if (r > 255) {
    r = 255;
  }
  if (r < 0) {
    r = 0;
  }

  if (g > 255) {
    g = 255;
  }
  if (g < 0) {
    g = 0;
  }

  if (b > 255) {
    b = 255;
  }
  if (b < 0) {
    b = 0;
  }
  return `${handleHex(r)}${handleHex(g)}${handleHex(b)}`.toUpperCase();
}
// console.log(rgb(300, 255, 255));
// yeah my solution is bad

//------------- other solution -------------

function rgb2(r, g, b) {
  return toHex(r)+toHex(g)+toHex(b)
}

const toHex = (d) => {
  if (d < 0) return "00";
  if (d > 255) return "FF";
  return  ("0"+Number(d).toString(16)).slice(-2).toUpperCase()
};

// console.log(rgb2(300, 0, 255));
// let a = "0ff0ff0ff";

function rgb3(r, g, b) {
  return [r, g, b].map((item) => {
    // in one line, really beautiful
    // where you use toString(16) is really important
    return ("0"+Math.max(0, Math.min(255, item)).toString(16)).slice(-2)
  }).join("").toUpperCase();
}
console.log(rgb3(111,0,300))
