// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

void main() {
  // let's go
  var res = 1700;
  // print(century(res));
  print(((1700 + 99) / 100).floor());
}

int? century(int year) {
  // return (year + 99) ~/ 100;
  // or
  return ((year + 99) / 100).floor();
}

/* ----------------------------- other solution ----------------------------- */
int century2(year) {
  return (year / 100).ceil();
}

int century3(year) => year % 100 == 0 ? year ~/ 100 : year ~/ 100 + 1;
