void main() {
  print(Fullname(lname: "hemmati", fname: "Daniel"));
}

String? Fullname({String? fname, String? lname}) {
  // if (fname != null && lname != null) {
  //   return fname + ' ' + lname;
  // }
  return fname! + ' ' + lname!;
}
