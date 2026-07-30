package main

import (
	"fmt"
	"strconv"
)

func Persistence(n int) int {
	if n < 10 {
		return 0
	}
	count := 0

	for n >= 10 {
		product := 1

		for _, char := range strconv.Itoa(n) {
			digit := int(char - '0')
			product *= digit
			fmt.Println("digit ", digit, " product ", product)
		}

		n = product
		count++
		fmt.Println("i am out count = ", count)
	}

	return count
}

func main() {
	fmt.Println(Persistence(999))
	// fmt.Println(Persistence(39))
}
