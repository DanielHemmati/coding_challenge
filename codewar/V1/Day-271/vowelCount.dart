import "dart:core";
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/dart

void main() {
  //
  // List<String> myList = ["daniel", "hemmati", "shahin"];
  // String vowel = "aeiouAEIOU";
  // String test = 'abcde';
  // var listOfString = test.split('').where((element) => element.contains('a'));
  // print(listOfString);
  var exp = new RegExp(r"(\w+)");
  Iterable<RegExpMatch> matches = exp.allMatches("daniel");
  print(matches);
}

int getCount(String inputStr) {
  String vowel = "aeiou";
  var exp = new RegExp(r"[aeiou]", caseSensitive: false);
  return 9;
}
