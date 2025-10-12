package main

import (
	"fmt"
	"strings"
	"unicode"
)

func ToJadenString(str string) string {
	words := strings.Fields(str)
	for i, w := range words {
		if len(w) > 0 {
			runes := []rune(w)
			runes[0] = unicode.ToUpper(runes[0])
			words[i] = string(runes)
		}
	}
	return strings.Join(words, " ")
}

func main() {
	text := "daniel hemmati is a bad guy"
	fmt.Println(ToJadenString(text))
}
