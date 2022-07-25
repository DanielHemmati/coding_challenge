#include <iostream>
#include <string>
#include <typeinfo>

using namespace std;

string number_to_string(int num){
  return to_string(num);
}

int main() {
  number_to_string(42);
  return 0;
}
