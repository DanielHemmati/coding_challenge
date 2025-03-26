package main

import (
	"fmt"
	"sort"
)

// one way is to use sort (assuming our slice is not too big)
func smallestInt(numbers []int) int {
	sort.Ints(numbers)
	return numbers[0]
}

// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/go
func main() {
	fmt.Println(smallestInt([]int{1, 2, 3, 4, 5}))
}
