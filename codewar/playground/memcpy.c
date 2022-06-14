#include <stdio.h>
#include <string.h>

int main() {
  // const char src[50] = "https://danielcodex.com";
  // char dest[50];

  // strcpy(dest, "Hellooooo!");
  // printf("before memcpy dest = %s\n", dest);

  // memcpy(dest, src, strlen(dest) + 1);
  // printf("after memcpy dest = %s\n", dest);

  printf("\n");
  char str1[] = "Geeks";
  char str2[] = "quiz";

  puts("st1 befoer memcpy");
  puts(str1);

  memcpy(str1, str2, strlen(str2));

  puts("\nstr1 after memcpy ");
  puts(str1);

  return 0;
}
