// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript

String.prototype.isUpperCase = function () {
  console.log(typeof String(this));
  console.log(typeof this);
  // why String(this)? see the answer of two log above
  // that's why typescript is better now
  return String(this) === this.toUpperCase();
};

// this will also work only if you have two equal sign not three
String.prototype.isUpperCase2 = function () {
  return this == this.toUpperCase();
};

console.log("DANIEL".isUpperCase());
