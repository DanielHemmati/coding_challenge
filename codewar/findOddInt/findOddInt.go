package main

import (
	"fmt"
)

func findOddInt(seq []int) int {
	if len(seq) == 1 {
		return seq[0]
	}

	res := map[int]int{}

	for _, n := range seq {
		if _, exists := res[n]; exists {
			res[n]++
		} else {
			res[n] = 1
		}
	}

	for key, value := range res {
		if value%2 != 0 {
			return key
		}
	}

	return 0
}

// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/go
func main() {
	fmt.Println(findOddInt([]int{1, 1, 2}))

	// exampleOfStringsField()
}

// other solution

func bitwiseOperation(seq []int) int {
	res := 0
	for _, n := range seq {
		res ^= n
	}
	return res
}
