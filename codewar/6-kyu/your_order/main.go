package main

import (
	"fmt"
	"sort"
	"strings"
)

func findDigit(word string) int {
	for _, char := range word {
		if char >= '0' && char <= '9' {
			return int(char - '0')
		}
	}
	return 0
}

func order(sentence string) string {
	if sentence == "" {
		return sentence
	}

	s := strings.Fields(sentence)

	sort.Slice(s, func(i, j int) bool {
		return findDigit(s[i]) < findDigit(s[j])
	})

	return strings.Join(s, " ")
}

// Time: O(n log n × m)
// Space: O(n) for the words slice.
// this up would be how i think

// Time: O(n * m)
// space: O(n)
func betterOrder(sentence string) string {
	if sentence == "" {
		return ""
	}

	words := strings.Fields(sentence)
	ordered := make([]string, len(words))

	for _, word := range words {
		position := findDigit(word)

		ordered[position-1] = word
	}

	return strings.Join(ordered, " ")
}

func main() {
	// fmt.Println(order("is2 Thi1s T4est 3a"))
	fmt.Println(betterOrder("is2 Thi1s T4est 3a"))
	fmt.Println(findDigit("Thi1s"))
}
