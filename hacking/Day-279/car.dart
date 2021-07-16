void main() {
  SelfDrivingCar tesla = SelfDrivingCar('1 hacker way');
  tesla.dirve();
}

class Car {
  int numberOfSeat = 5;
  void drive() {
    print("drive forward");
  }
}

class SelfDrivingCar extends Car {
  String? destination;

  SelfDrivingCar(String userSetDestination) {
    destination = userSetDestination;
  }

  // i don't know why it doesn't work
  // @override
  void dirve() {
    // this will come from Car class
    super.drive();
    print("sterring towards $destination");
  }
}

class ElectricCar extends Car {}
