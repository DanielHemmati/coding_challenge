// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/go
package main

import (
	"fmt"
	"strings"
)

func DuplicateEncode(word string) string {
	lower := strings.ToLower(word)
	counts := make(map[rune]int)

	res := ""

	// can do this b/c Go can han
	for _, char := range lower {
		counts[char]++
	}

	for _, char := range lower {
		if counts[char] == 1 {
			res += "("
		} else {
			res += ")"
		}
	}

	return res
}

func main() {
	fmt.Println(DuplicateEncode("din"))    // "((("
	fmt.Println(DuplicateEncode("recede")) // "()()()"
	fmt.Println(DuplicateEncode("DANIEL")) // "()()()"

	fmt.Println("-----")

	fmt.Println(efficient("din"))    // "((("
	fmt.Println(efficient("recede")) // "()()()"
	fmt.Println(efficient("DANIEL")) // "()()()"
}

func efficient(word string) string {
	lower := strings.ToLower(word)
	counts := make(map[rune]int, len(lower))

	// can do this b/c Go can handle this
	for _, char := range lower {
		counts[char]++
	}

	var b strings.Builder
	b.Grow(len(lower))

	for _, char := range lower {
		if counts[char] == 1 {
			b.WriteByte('(')
		} else {
			b.WriteByte(')')
		}
	}

	return b.String()
}
