// https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/c
#include <stdio.h>

// solved it my own
int solution(int n) {
  if (n < 0) {
    return 0;
  }

  int res = 0;
  for (int i = 0; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      res += i;
    }
  }

  printf("%d\n", res);
  return res;
}

int main() {
  solution(10);
  return 0;
}
