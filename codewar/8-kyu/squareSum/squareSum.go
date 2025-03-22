package main

import (
	"fmt"
	"math"
)

func squareSum(numbers []int) int {
	res := 0
	for _, n := range numbers {
		res += int(math.Pow(float64(n), 2))
	}
	return res
}

// https://www.codewars.com/kata/515e271a311df0350d00000f/train/go
func main() {
	fmt.Println(squareSum([]int{1, 2, 2}))
}
