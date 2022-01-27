// https://www.codewars.com/kata/56dd9b84fe5754786f0014f7


// 
Array.prototype.filter = function (func) {
    var array = [];
    for (var i = 0; i < this.length; i++) {
        console.log(this[i]);
        console.log('---------');
        console.log(func(this[i]));
        if (func(this[i])) {
            array.push(this[i]);
        }
    }
    return array;
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const better_array = array.filter(function(number) {
    return number > 5;
})

console.log(better_array);
