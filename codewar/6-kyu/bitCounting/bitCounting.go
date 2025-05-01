package main

import (
	"fmt"
	"math/bits"
	"strconv"
)

func countBits(n uint) int {
	bits := strconv.FormatInt(int64(n), 2)
	count := 0
	for _, b := range bits {
		if b == '1' {
			count++
		}
	}
	return count
}

func main() {
	// fmt.Println(countBits(1245))
	fmt.Println(second(1245))
}

// other solution
func second(n uint) int {
	return bits.OnesCount(n)
}

func third(n uint) int {

}
