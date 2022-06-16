#include <stdbool.h>
#include <stdio.h>

// i solved it
int xor (bool a, bool b) {
  printf("%d\n", a ^ b);
  return a ^ b;
}

    int main() {
  xor(false, false);
  return 0;
}
