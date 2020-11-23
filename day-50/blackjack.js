var count = 0;

var posOne = [2, 3, 4, 5, 6];
var zero = [7, 8, 9];
var negative = [10, "J", "Q", "K", "A"];

function cc(card) {
  // Only change code below this line

  var regex = /JQKA/
  if (card <= 6 || card >= 2) {
    count++;
  } else if (card === 10 || regex.test(card)) {
    count--;
  }
  // we can also write for the zero, but there is not point for that
  if (card > 0 ) return count + " Bet"
  return count + " Hold"
}

// i made a stupid mistake during making this game

