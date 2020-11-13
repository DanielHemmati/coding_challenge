function isEqual(num1, num2) {
    if (typeof num1 !== "number" || typeof num2 !== "number") return false;
    return num1 === num2;
}

// console.log(isEqual(2,2))

//------------- other solution -------------
function isEqual2(n1, n2) {
    return Number.isInteger(n1, n2) && n1 === n2;
}

// console.log(isEqual2(2, 2));

function isEqual3(n1, n2) {
    return typeof n1 === "string" || typeof n2 === "string" ? false : n1 === n2;
}

// console.log(isEqual3("2", 2))

