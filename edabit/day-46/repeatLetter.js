
// https://edabit.com/challenge/pggD9dH8Nwuac7fPE


/**
 * 
 * @param {string} str 
 * @param {number} n 
 */
function repeat(str, n) {
  var res = ''
  for (var i = 0; i < str.length; i++){
    res += [...str][i].repeat(n)
  }
  return res
}

var a = ['a', 'b']

// console.log(a[0].repeat(10))

// console.log(repeat('daniel', 5))

//------------- other solution -------------
/**
 * 
 * @param {string} str 
 * @param {Number} n 
 */
function first(str, n) {
  // i like this 
  return [...str].map(x => x.repeat(n)).join('')
}

console.log(first('daniel', 5))


