#include <stdio.h>
#include <stdlib.h>


int main() {
  int i, *ptr, sum = 0;
  ptr = calloc(10, sizeof(int));

  if (ptr == NULL){
    printf("Error! memory is not allocated");
  }

  printf("bulding and calculating the sequence sum of the first 10 terms \n");

  for (i = 0; i < 100; ++i){
    *(ptr + i) = i;
    sum += *(ptr + i);
  }

  printf("sum= %d", sum);
  free(ptr);
  return 0;
}
