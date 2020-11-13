

// https://simonsmith.io/destructuring-objects-as-function-parameters-in-es6

// es5
function myfunc(ops) {
    var name = ops.name;
    var age = ops.age
    return name
}

// console.log(myfunc({name: "daenil", age: 22}))


function test({ someVar: prop } = {}) {
    return prop;
}

console.log(test())
