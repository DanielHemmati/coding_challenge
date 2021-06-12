import "dart:io";

// read this two link about null
bool isEmpty(String string) => string.length == 0;

void main() {
  print("enter your name");
  String? name = stdin.readLineSync();
  print("hello $name");
}
