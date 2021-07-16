void main() {
  print("hemamt");

  Human dani = Human();

  dani.height = 2; // so we can change this

  print(dani.height);
}

class Human {
  double height = 15;
  int age = 0;
  Human(double h, int a) {
    height = h;
    age = a;
  }
}
