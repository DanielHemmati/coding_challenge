// https://edabit.com/challenge/jJS3yokQmu4etN5qs

/**
 *
 * @param {Object} obj
 * @param {string} key
 */
function hasKey(obj, key) {
    return obj.hasOwnProperty(key) ? true : false;
}

// there are different solution of course
// console.log(hasKey( {a: 44, b: 45, c: 46 }, "d"));
// console.log(hasKey({ craves: true, midnight: true, snack: true }, "craves"));

function hasKey2(obj, key) {
    // but with all of this you have to check at first if the object is actuall an object
    return key in obj;
}
// console.log(hasKey2( {a: 44, b: 45, c: 46 }, "d"));

function hasKey3(obj, key) {
    return Object.keys(obj).includes(key);
}

// var res = { a: 44, b: 45, c: 46 };
// this one will also works
// console.log(Object.keys(res).includes('a'));
