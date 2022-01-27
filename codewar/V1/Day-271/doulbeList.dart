// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/dart
void main() {
// test
  var list = [1, 2, 3];
  var res = maps(list);
  print(res);
}

List<int> maps(List<int> arr) {
  return arr.map((e) => e * 2).toList();
}
