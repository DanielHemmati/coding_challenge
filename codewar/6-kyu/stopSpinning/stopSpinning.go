package main

import (
	"fmt"
	"strings"
)

func reverseWord(word string) string {
	res := []rune(word)
	for i, j := 0, len(word)-1; i < j; i, j = i+1, j-1 {
		res[i], res[j] = res[j], res[i]
	}
	return string(res)
}

func spinWord(str string) string {
	parts := strings.Fields(str)
	res := []string{}

	for _, value := range parts {
		if len(value) >= 5 {
			res = append(res, reverseWord(value))
		} else {
			res = append(res, value)
		}
	}

	return strings.Join(res, " ")
}

func main() {
	fmt.Println(spinWord("Hey fellow warriors"))
}
