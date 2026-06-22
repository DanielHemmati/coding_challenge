package main

import (
	"fmt"
	"math"
)

func RowSUMOddNumber(n int) int {
	return int(math.Pow(n, 2))
}

func main() {
	fmt.Println(RowSUMOddNumber(2))
}
