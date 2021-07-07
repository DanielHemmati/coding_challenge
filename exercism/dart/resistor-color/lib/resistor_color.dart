void main() {
  var res = ResistorColor().colorCode('orange');
  print(res);
}

class ResistorColor {
  // Put your code here
  final colors = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];
  int colorCode(String color) {
    return colors.indexOf(color);
  }
}
