
// https://edabit.com/challenge/SrCTGbhwPRyHZSAGu
// okya we are going to learn new stuff 

class User {
  constructor(name) {
    this.name = name
  }
  

  sayHi() {
    console.log(this.name);
  }
}

let daniel = new User('mina')
// console.log(daniel.name)
// console.log(daniel.sayHi())
// console.log(typeof User)
// console.log(User)
console.log(typeof User)
console.log(User === User.prototype.constructor)
console.log(User.prototype.sayHi)
console.log(Object.getOwnPropertyNames(User))




