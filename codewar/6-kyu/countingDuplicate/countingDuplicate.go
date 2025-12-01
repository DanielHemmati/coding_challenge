// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/go
package main

import (
	"fmt"
	"strings"
)

const (
	a = "abcde"   // 0
	b = "aabbcde" // 2
)

func duplicateCount(s1 string) int {
	s := strings.ToLower(s1)
	counts := make(map[rune]int)

	for _, ch := range s {
		counts[ch]++
	}

	duplicates := 0
	for _, v := range counts {
		if v > 1 {
			duplicates++
		}
	}
	return duplicates
}

func main() {
	res := duplicateCount(b)
	fmt.Println(res)

	fmt.Println("------")

	aa := smart(b)
	fmt.Println("smart: ", aa)
}

// other solutions

func smart(s string) (c int) {
	h := map[rune]int{}
	for _, r := range strings.ToLower(s) {
		if h[r]++; h[r] == 2 {
			c++
		}
	}
	return
}
