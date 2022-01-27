#include <cmath>
#include <iostream>
using namespace std;

bool approx_equals(double a, double b){
    return abs(a - b) < 0.001;
}


int main (){
    cout << approx_equals(2.5, 1.1);
    return 0;
}
