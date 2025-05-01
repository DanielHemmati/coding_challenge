package main

import (
	"fmt"
)

func summation(n int) int {
	res := 0
	for i := 0; i <= n; i++ {
		res += i
	}
	return res
}

func main() {
	fmt.Println(summation(8))
}
