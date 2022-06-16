#include <stdio.h>
#include <math.h>

// this didn't work on the site
long odd_count(long n) {
  printf("\n");
  printf("the number is: %ld\n", n);

  int res = 0;
  for (int i = 0; i < n; i++){
    if (i % 2 != 0){
      res += 1;
    }
  }
  printf("%d\n", res);
  return res;
}


// other solutions

// why i didn't thought about this ?? LOL
long second(long n){
  printf("%ld\n", n /2 );
  return n / 2;
}

long third(long n){
  // right shift bit-wise operator
  return n >> 1;
}

long fourth(long n){
  int answer = floor(n / 2);
  return answer;
}

int main() {
  // odd_count(7);
  // second(7);
  // fourth(7);
  printf("%d\n", 7 / 2);
  return 0;
}
