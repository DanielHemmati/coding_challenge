var l = [
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eigth",
  "nineth",
  "tenth",
  "eleventh",
  "twelth",
  "Two turtle doves",
  "Three french hens",
  "Four calling birds",
  "Five golden rings",
  "Six geese-a-laying",
  "Seven swans-a-swimming",
  "Eight maids-a-milking",
  "Nine ladies dancing",
  "Ten lords-a-leaping",
  "Eleven pipers piping",
  "Twelve drummers drumming",
];
var b = "\n";
for (var i = 0; i < 12; i++) {
  var p =
    "On the " + l[i] + "day of Christmas" + b + "My true love gave to me" + b;
  for (var x = i; x > 0; x--) p += l[13 + x] + b;
  if (i > 0) p += "and ";
  p += "a partridge in a pear tree" + b + b;
  console.log(p);
}

// i didn't get it LOL
