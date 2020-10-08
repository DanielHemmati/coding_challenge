// https://edabit.com/challenge/qktP97jpm5arY2yEA
// yo morse encoding, it's so cool
let morseCode = {
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
    " ": " ",
    ":": "---...",
    "'": ".----.",
};


/**
 *
 * @param {String} str
 */
// my solution
function encodeMorse(str) {
    var morseDecode = [];
    str.split(" ").map(function(word) {
        word.split('').map(function(char) {
            for (var key in morseCode) {
                if (char === key) {
                    morseDecode.push(morseCode[key])  
                }
            } 
        })
    })
    return morseDecode.join(' ');
}

console.log(encodeMorse('daniel hemmati'));
// that was fun. 