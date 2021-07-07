void main() {
  print(twoFer('daniel'));
}

String twoFer([String name]) {
  // Put your code here
  if (name != null) {
    return 'One for ${name}, one for me.';
  } else {
    return "One for you, one for me.";
  }
}
