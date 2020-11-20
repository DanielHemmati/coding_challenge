function range(start, stop, step) {
  return Array.from(
    { length: (stop - start) / step + 1 },
    (_, i) => start + i * step
  );
}

// console.log(range(0,4,1))

// console.log(range('a'.charCodeAt(0), 'z'.charCodeAt(0), 1).map(x => String.fromCharCode(x)))

let data = [
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  110,
  111,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
];

var res = data.map((x) => String.fromCharCode(x));

// console.log(res)

/**
 *
 * @param {String} arr
 */
function test(str) {
  var element = []

  for (let i = 0; i < [...str].length; i++) {
    element.push([...str][i])
  }
  
  return element;
}

console.log(test("daniel"));
