package main

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/train/go

import (
	"fmt"
	"strings"
)

func FindShort(s string) int {
	words := strings.Fields(s)
	if len(words) == 0 {
		return 0
	}

	minLen := len(words[0])
	// words[1:] -> b/c we don't to compare the first word with itself
	for _, w := range words[1:] {
		if len(w) < minLen {
			minLen = len(w)
		}
	}

	return minLen
}

func main() {
	str := "the quick brown fox jumps over the lazy dog"
	fmt.Println(FindShort(str))
}
