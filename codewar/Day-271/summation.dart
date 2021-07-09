// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/dart
void main() {
  var res = summation(100);
  var res2 = summation(100);
  print(res);
  print(res2);
}

int summation(int n) {
  return (n * (n + 1) ~/ 2);
}

int summationWithLoop(int n) {
  var res = 0;
  for (var i = 0; i <= n; i++) {
    res += i;
  }
  // don't say my email was wrong?
  return res;
}
