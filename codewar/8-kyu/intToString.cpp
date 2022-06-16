#include <iostream>
#include <typeinfo>

// using namespace std;
int main() {
  // std::string s = std::to_string(43);
  // std::cout << s << std::endl;
  // std::cout << typeid(s).name() << std::endl;

  // this is way better than c LOL 
  int x = 2;
  int *y = &x;
  std::cout << y << std::endl;

  return 0;
}
