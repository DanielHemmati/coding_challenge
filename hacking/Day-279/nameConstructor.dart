void main() {
  Employee id = Employee.ID(12);
  print(id.empId);
}

class Employee {
  int? empId;
  String? empname;
  String? empDept;

  Employee.ID(this.empId);

  Employee.name(this.empname);

  Employee.department(this.empDept);
}
