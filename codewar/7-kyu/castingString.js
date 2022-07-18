String.prototype.toJadenCase = function() {
    return this.replace(/(^|\s)[a-z]/g, x => x.toUpperCase());
}

let input = "daniel hemmati how are you"
console.log(input.toJadenCase());

