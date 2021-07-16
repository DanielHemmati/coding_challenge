void main() {
  var employee = Employee.fromJson({});
  print(employee);

  var test = Employee.newPrint();
  print(test);

  // Person newPerson = Person('god');
}

class Person {
  String? firstName;

  Person(this.firstName);

  Person.fromJson(Map data) {
    print("in Person");
  }

  Person.newPrint() {
    print("plz print sometihng");
  }
}

class Employee extends Person {
  Employee.fromJson(Map data) : super.fromJson(data) {
    print("in employee");
  }
  Employee.newPrint() : super.newPrint() {
    print("new print but from emply");
  }
}
