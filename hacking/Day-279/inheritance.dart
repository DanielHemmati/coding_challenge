// inheritance
// https://www.udemy.com/course/flutter-bootcamp-with-dart/learn/lecture/14483568#notes
void main() {
  Car newCar = Car();
  print(newCar.numberOfSeat);
  newCar.drive();

  ElectricCar myTesla = ElectricCar();
  print(myTesla.numberOfSeat);
}

class Car {
  int numberOfSeat = 5;
  void drive() {
    print("drive");
  }
}

class ElectricCar extends Car {}
