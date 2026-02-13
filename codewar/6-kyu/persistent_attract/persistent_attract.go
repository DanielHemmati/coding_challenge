package main

import (
	"fmt"
)

// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/go

func Persistence(n int) int {
	if n < 10 {
		return 0
	}

	count := 0
	for n >= 10 {
		product := 1
		temp := n
		for temp > 0 {
			digit := temp % 10
			product *= digit
			temp /= 10
		}
		n = product
	}

	return count
}

func main() {
	fmt.Println(Persistence(39))
}
