// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/dart
void main() {
  var res = "    da  niel    ";
  print(noSpace(res));
  print(test(res));
}

String noSpace(String x) {
  return x.replaceAll(" ", "");
}

String test(String s) {
  return s.split(' ').join('');
}
