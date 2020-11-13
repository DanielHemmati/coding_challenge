
function isEqual(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") return false;
    return num1 === num2;
}

console.log(isEqual(2,2))
