


// hello there
// let's sort this by number
var data = [
    "day-1",
    "day-10",
    "day-13",
    "day-14",
    "day-15",
    "day-16",
    "day-2",
    "day-20",
    "day-22",
    "day-23",
    "day-3",
    "day-32",
    "day-33",
    "day-34",
    "day-38",
    "day-39",
    "day-4",
    "day-40",
    "day-41",
    "day-7",
    "day-9",
];

// you can't use sort (normal way)
// console.log(data.sort())

var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'})
console.log(data.sort(collator.compare))



