#include <stdio.h>
#include <string.h>

int main() {
  char src[40];
  char dest[100];

  // memset(dest, '\0', strlen(dest));
  strcpy(src, "this is danielcodex.com");
  strcpy(dest, src);

  printf("final copied string: %s\n", dest);

  return 0;
}
