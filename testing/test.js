class Test {
  constructor(string) {
    this.string = string;
  }
  getName() {
    return this.string.length;
  }
}
const test = new Test("dainel");
console.log(test.getName());
