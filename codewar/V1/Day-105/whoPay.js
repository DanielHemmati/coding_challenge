// https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript

/**
 *
 * @param {String} name
 */
function whoIsPaying(name) {
  return name.length <= 2 ? [name] : [name, name.slice(0, 2)];
}

// let animals = new Set();
// animals.add("dog");
// animals.add("cat");
// animals.add("horse");
// console.log(animals.has("dog"));
// animals.forEach((item) => {
//   console.log(`hey ${item}`);
// });

// animals.clear(); // this one is the good one
// console.log([...animals]);

// let string = new Set("hello there, can you see moe");
// console.log([...string]);

// for (let str of string) {
//   console.log(`howdy ${str}`); // of
// }

// let partyTime = new Set(["pizza", "sandwich", "hungry"]);

// let items = partyTime.values();

// console.log(items.next());
// console.log(items.next());
// console.log(items.next());
// console.log(items.next().done);

let test = new Set("ddddd"); // no duplicate
console.log(test);
