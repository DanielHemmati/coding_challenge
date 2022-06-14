#include <stddef.h>
#include <stdio.h>
#include <string.h>
// https://www.codewars.com/kata/5f70c883e10f9e0001c89673/train/c

int int_asc_cmp(const void *a, const void *b) {
  const int val1 = *(int *)a;
  const int val2 = *(int *)b;
  return val1 - val2;
}

int int_desc_cmp(const void *a, const void *b) {
  const int val1 = *(int *)a;
  const int val2 = *(int *)b;
  return val2 - val1;
}

void flip(char d, const int *array, size_t n, int *result) {
  memcpy(result, array, n * sizeof(int));
  qsort(result, n, sizeof(int), d == 'R' ? int_asc_cmp : int_desc_cmp);

}

int main() {
  const int array[4] = {3, 2, 1, 2};
  char d = 'R';
  const int expected[4] = {1, 2, 2, 3};
  
  flip(d, array)
  
  return 0;
}
