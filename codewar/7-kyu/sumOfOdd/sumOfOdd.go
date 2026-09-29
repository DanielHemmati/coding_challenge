package main

import (
	"fmt"
	"math"
)

// url: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/go

func RowSUMOddNumber(n int) int {
	return int(math.Pow(float64(n), 3))
}

func main() {
	fmt.Println(RowSUMOddNumber(2))
}
