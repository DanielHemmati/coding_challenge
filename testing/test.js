class Test {
  constructor(string, age) {
    this.string = string;
    this.age = age;
  }
  getName() {
    return this.string.length;
  }
}
const test = new Test("dainel", 22);
console.log(test.getName());
console.log(test.age);
