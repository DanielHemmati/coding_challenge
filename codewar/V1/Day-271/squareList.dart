// https://www.codewars.com/kata/515e271a311df0350d00000f
import 'dart:math';

void main() {
  //
  var list = [1, 2, 2];
  var res = list.map((e) => e * e);
  print(res);
  // print(withMapAndReduce(list));
  // print(squareSum(list));
}

int? squareSum(List numbers) {
  var res = 0;
  for (var i = 0; i < numbers.length; i++) {
    var expo = pow(numbers[i], 2);
    res += expo.toInt();
  }
  return res;
}

// i have trouble figuring out the type most of the time
int withMapAndReduce(List<int> number) {
  return number
      .map((e) => e * e)
      .fold(0, (previousValue, element) => previousValue + element);
}
