class Question {
  late String questionText;
  late bool questionAnswer;

  Question({String? q, bool? a}) {
    questionText = q!;
    questionAnswer = a!;
  }
}

void main() {
  List<Question> questionBank = [
    Question(q: "am i okay", a: true),
    Question(q: "are you daniel", a: false),
    Question(q: "are you an robot? fuck yeah bitch LOL", a: true)
  ];
  // print("test");
  print(questionBank[0].questionText);
}
