// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/dart
void main() {
  print(repeatString(2, "daniel"));
  print(withLoop(3, "hemmati"));
  print(withGenerate(1, "magnumOPus"));
  print(withFill(5, 'f'));
  print(recursion(2, "recu"));
}

String repeatString(int n, String s) {
  // this was my solution by the way
  return s * n; // but this will work? why
  // return n * s; // this won't work
}

/* ----------------------------- other solution ----------------------------- */

String withLoop(int n, String s) {
  var res = [];
  for (var i = 0; i < n; i++) {
    res.add(s);
  }
  return res.join("");
}

String withGenerate(int n, String s) {
  return List.generate(n, (index) => s).join();
}

String withFill(int n, String s) {
  return List.filled(n, s).join();
}

String recursion(int n, String s) {
  if (n == 1)
    return s;
  else
    // this is crazy, use python tutor with JS/PY to undestand it
    return repeatString(n - 1, s) + s;
}
