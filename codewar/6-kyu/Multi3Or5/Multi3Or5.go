package main

import (
	"fmt"
)

func Multiple3And5(number int) int {
	res := 0
	// generateSlice := []int{}
	for i := range number {
		if i%3 == 0 || i%5 == 0 {
			res += i
		}
	}
	return res
}

func main() {
	fmt.Println(Multiple3And5(10))
}
