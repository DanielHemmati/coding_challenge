// https://www.codewars.com/kata/5265326f5fda8eb1160004c8/train/c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

const char* number_to_string(int number) {
  char* s;
  asprintf(&s, "%d", number);
  return s;
}

// saw the solution
int main() {
  number_to_string(22);
  return 0;
}
