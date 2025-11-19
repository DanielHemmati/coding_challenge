package main

import (
	"fmt"
	"strings"
)

func DuplicateEncode(word string) string {
	newWord := strings.Split(strings.ToLower(word), "")

	return ""
}

func main() {
	fmt.Println(DuplicateEncode("din"))    // "((("
	fmt.Println(DuplicateEncode("recede")) // "()()()"
	fmt.Println(DuplicateEncode("DANIEL")) // "()()()"
}
