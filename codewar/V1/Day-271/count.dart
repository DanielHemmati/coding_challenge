// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7
void main() {
  //
  print(monkeyCount(10));
}

List<int> monkeyCount(int n) {
  return List.generate(n, (index) => index + 1);
}
