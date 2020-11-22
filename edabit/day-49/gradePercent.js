// function gradePercentage(userScore, passScore) {
//   let s = "You ";
//   userScore = parseInt(userScore.substring(0, userScore.length - 1));
//   passScore = parseInt(passScore.substring(0, passScore.length - 1));
//   if (youScore <= passScore) s = s + "FAILED";
//   if (userScore >= passScore) s = s + "PASSED";
//   return "You" + " " + s + " " + "the Exam";
// }

// i should fix that shit above

/**
 *
 * @param {String} userScore
 * @param {String} passScore
 */
function fixGrade(userScore, passScore) {
  if (!n2 || !n4) {
    n2 = ""
    n4 = ""
  }
  var [n1, n2] = userScore;
  var [n3, n4] = passScore;
  return +(n1 + n2) >= +(n3 + n4)
    ? "You PASSED the Exam"
    : "You FAILED the Exam";
}

console.log(fixGrade("85%", "85%"));
console.log(fixGrade("99%", "85%"));
console.log(fixGrade("65%", "90%"));
console.log(fixGrade("8%", "5%"));

// i lost the quetion line 
// but it workes 
