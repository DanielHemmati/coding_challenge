// https://www.codewars.com/kata/5545f109004975ea66000086/train/dart
void main() {
  print(isDivisible(6, 2, 3));
}

bool isDivisible(int n, int x, int y) {
  return n % x == 0 && n % y == 0 ? true : false;
}
