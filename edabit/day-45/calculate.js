// https://edabit.com/challenge/vHWkiCsH8JRbP6rtM

/**
 *
 * @param {number} num1
 * @param {number} num2
 * @param {string} op
 */
function calculate(num1, num2, op) {
  if (op === "+") {
    return num1 + num2;
  } else if (op === "*") {
    return num1 * num2;
  } else if (op === "-") {
    return num1 - num2;
  } else if (op === "/") {
    return num1 / num2;
  } else if (op === "%") {
    return num1 % num2;
  }
}

// console.log(calculate(4, 9, "+"))
// console.log(calculate(12, 5, "-"))
// console.log(calculate(6, 3, "*"))
// console.log(calculate(25, 5, "/"))
// console.log(calculate(14, 3, "%"))

//------------- other solution -------------
// this solution are crazy

// if you want to understand the this code,
// see the code below it
function calculate2(n1, n2, op) {
  return {
    "+": n1 + n2,
    "-": n1 - n2,
    "*": n1 * n2,
    "/": n1 / n2,
    "%": n1 % n2,
  }[op];
}

console.log(calculate2(1, 2, "+"));

function makeGamePlayer(name, totalScore, gamesPlayed, test) {
  return {
    name: name,
    totalscore: totalScore,
    gamesPlayed: gamesPlayed,
  }[test];
}

// console.log(makeGamePlayer('daniel', 12, 22, 'name'))

function second(n1, n2, op) {
  return eval(n1 + op + n2);
}

// console.log(second(1,2, '+'))
// console.log(eval(1+'+'+2))

// the better to write the above is like this
function third(n1, n2, op) {
  return eval(`${n1} ${op} ${n2}`);
}

console.log(third(1, 2, "+"));
