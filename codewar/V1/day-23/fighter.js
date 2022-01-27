// https://www.codewars.com/kata/582dafb611d576b745000b74/train/javascript

var quote = function (fighter) {
    return fighter.toLowerCase() === "george saint pierre"
        ? "I am not impressed by your performance."
        : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};

console.log(quote("george saint pierre"));
