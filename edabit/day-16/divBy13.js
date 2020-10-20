// https://edabit.com/challenge/5232asan2yFuMGnHq

/**
 * 
 * @param {Array} nums 
 */
function unlucky13(nums) {
    return nums.filter(item => item % 13 !== 0);
}

console.log(unlucky13([53, 182, 435, 591, 637]));
