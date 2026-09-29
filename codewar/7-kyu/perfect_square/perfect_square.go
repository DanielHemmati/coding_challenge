package main

import (
	"fmt"
	"math"
)

// url: https://www.codewars.com/kata/56269eb78ad2e4ced1000013/solutions/go

func FindNextSquare(sq int64) int64 {
	x := math.Sqrt(float64(sq))
	if math.Trunc(x) != x {
		return -1
	}
	return int64(x*x + 2*x + 1)
}

func main() {
	fmt.Println(FindNextSquare(121))
}
