// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/dart
void main() {
  //
  var list = [1, 2, 3];
  print(invert(list));
  // var listCom = [
  //   for (var i in [1, 2, 3]) -i
  // ];
  // print(listCom);
}

List<int> invert(List<int> arr) {
  return arr.map((el) => el * -1).toList();
}
