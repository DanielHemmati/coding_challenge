void main() {
  var list = [1, 2, 3, -2];
  print(positiveSum(list));
}

int positiveSum(List<int> arr) {
  return arr
      .where((element) => element > 0)
      .toList()
      .fold(0, (previousValue, element) => previousValue + element);
}
