#include <stdio.h>
#include <stdlib.h>

int values[] = {88, 56, 100, 2, 25};

// int cmpfunc(const void *a, const void *b) {
//   const int val1 = *(int *)a;
//   const int val2 = *(int *)b;

//   return (val1 - val2);
// }

// or this syntax idk which one is better tbh
int cmpfunc (const void *a, const void *b){
  const int *val1 = a;
  const int *val2 = b;
  return (*val1 - *val2);
}

int main() {
  printf("before sorting the list is: \n");
  for (int i = 0; i < 5; i++) {
    printf("%d ", values[i]);
  }

  qsort(values, 5, sizeof(int), cmpfunc);

  printf("\n after sorting the list is: \n");
  for (int i = 0; i < 5; i++) {
    printf("%d ", values[i]);
  }

  return 0;
}
