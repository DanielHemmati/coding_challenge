void main() {
  //
  // var input = "Music \u{1d11e} for the win"; // Music 𝄞 for the win

  var test = "daniel\u{1d11e}";
  // print(new String.fromCharCodes(test.runes.toList().reversed));
  // print(new String.fromCharCodes(test.runes.toList().reversed));
  print(otherSolution(test));
  // print(solution(test));
}

String solution(str) {
  return str.split('').reversed.join("");
}

String otherSolution(String str) {
  return new String.fromCharCodes(str.runes.toList().reversed);
}
