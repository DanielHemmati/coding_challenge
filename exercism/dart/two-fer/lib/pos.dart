void main() {
  final res = pos();
  print(res);
}

String pos([String name]) {
  // it's like js
  return name ?? "hemmait";
}
