// it will gives you a relief
void main() {
  // that's kind of redundant
  int? step1Result = add(n1: 5, n2: 9);

  int? step2Result = multiply(step1Result!, 5);

  double finalResult = step2Result / 3;

  print(finalResult);
}

int? add({int? n1, int? n2}) {
  // either this or
  // return n1! + n2!;
  if (n1 != null && n2 != null) {
    return n1 + n2;
  }
}

int multiply(int res, int n2) {
  return res * n2;
}
