// they wrote it like this at first 😠 const char* even_or_odd(int n);
#include <stdio.h>

const char* even_or_odd(int n) {
  if (n % 2 == 0) {
    return "Even";
  }
  return "Odd";
}

int main() {
  even_or_odd(2);
  return 0;
}  //