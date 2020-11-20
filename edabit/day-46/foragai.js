
var a = [['daniell', 'hemmati'], ['shahin', 'fun'], ['mina', 'sabzian']]


var [daniel, shahin, mina] = a;
// console.log(daniel)
// console.log(shahin)
// console.log(mina)

// old school, class
function Person(name, city) {
  this.name = name;
  this.city = city;
}

Person.prototype.age = 22

const test = new Person('daniel', 'Germany')

// for (let i in test) {
//   console.log(i, daniel[i]) // we don't want to see age, because it's inherited 
// }


// i learned this in eloquent javascript, but forgot it
for (const i in test) {
  if (test.hasOwnProperty(i)) {
    console.log(i , test[i])
  }
}