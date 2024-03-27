#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

size_t count_sheep(const bool *sheep, size_t count) {
  int res = 0;
  for (size_t i = 0; i < count; i++) {
    if (sheep[i] == true) {
      res += 1;
    } else if (sheep[i] != false) {
      printf("Null or undef\n");
    }
  }
  printf("%d\n", res);
  return res;
}

int main(int argc, char *argv[]) {
  const bool sheep[] = {
      true,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      true,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      false,
      false,
      true,
      true,
  };

  count_sheep(sheep, sizeof(sheep) / sizeof(sheep[0]));

  return 0;
}
