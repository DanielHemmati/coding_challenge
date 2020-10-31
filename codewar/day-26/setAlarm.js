// https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript

/**
 *
 * @param {Boolean} employed
 * @param {Boolean} vacation
 */
// it was like i could not solve this LOL
function setAlarm(employed, vacation) {
    if (employed === true && vacation === false) {
        return true;
    } else {
        return false;
    }
}

//------------- other solution ------------
// this are one-liner
// i wonder if we are going to see this kind of code in a real life
const setAlarm2 = (employed, vacation) => employed && !vacation;


// better to like this 
const setAlarm2 = (employed, vacation) => employed && !vacation ? true : false