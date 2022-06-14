#include <ctype.h>
#include <stdio.h>
#include <string.h>
// https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/c

// finally i solve something in c (sleep makes miracle)
int same_case(char a, char b) {
  if (islower(a) > 0 && islower(b) > 0) {
    return 1;

  } else if (isupper(a) > 0 && isupper(b) > 0) {
    return 1;

  } else if (isalpha(a) == 0 || isalpha(b) == 0) {
    printf("both or one of them is not alpha");
    return -1;

  } else {
    return 0;
  }
  return 0;
}

int main() {
  char a = '+';
  char b = 'A';

  same_case(a, b);

  return 0;
}
