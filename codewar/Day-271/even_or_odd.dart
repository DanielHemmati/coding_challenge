void main() {
  // print(evenOrOdd(2));
  print(evenOrOdd2(2));
  print(2.isOdd);
  print(evenOrOdd3(2));
}

String evenOrOdd(int number) {
  return number % 2 == 0 ? "even" : "odd";
}

/* ----------------------------- other solution ----------------------------- */

String evenOrOdd2(int number) => number.isEven ? "Even" : "Odd";

// haha love this one
String evenOrOdd3(int number) {
  return ["Even", "Odd"][number % 2];
}
