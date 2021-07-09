import "dart:math";

void main() {
  var list = <int>[1, 2, 3, -2];
  // print(positiveSum(list));
  // print(max(1, 2));
  print(clever(list));
}

int positiveSum(List<int> arr) {
  return arr
      .where((element) => element > 0)
      .toList()
      .fold(0, (previousValue, element) => previousValue + element);
}

/* ----------------------------- the clever one----------------------------- */
int clever(List<int> arr) {
  return arr.fold(
      0, (previousValue, element) => previousValue + max(element, 0));
}
