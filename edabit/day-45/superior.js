
// https://edabit.com/challenge/xtHTBXjumRg5AhsT5


/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
function isFirstSuperior(arr1, arr2) {
  // for (var i = 0; i < arr1.length; i++){
  //   if (arr1[i] === arr2[i]) return false
  // }
  // this is also another solution
  // if (arr1.join('') === arr2.join('')) return false;
  // i didn't the first if would work that is awesome 
  return (arr1.join('') === arr2.join('') === false) && arr1.some((item, i) => item > arr2[i]) ? true : false

}

// console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]))
console.log(isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]))
console.log(isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]))
console.log(isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]))
console.log(isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]))

//------------- other solution -------------

// i didn't knew that LOL
function isFirstSuperior2(arr1, arr2) {
	return arr1 > arr2;
}

