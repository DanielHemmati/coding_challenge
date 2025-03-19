package main

import (
	"fmt"
	"regexp"
	"strings"
)

func disemvowel(comment string) string {
	vowels := map[rune]bool{
		'a': true, 'e': true, 'i': true, 'o': true, 'u': true,
		'A': true, 'E': true, 'I': true, 'O': true, 'U': true,
	}

	result := []rune{}
	for _, c := range comment {
		if !vowels[c] {
			result = append(result, c)
		}
	}

	return string(result)
}

func usingRegex(comment string) string {
	return regexp.MustCompile("(?i)[aeiou]").ReplaceAllString(comment, "")
}

func usingStrings(comment string) string {
	for _, c := range "aeiouAEIOU" {
		comment = strings.ReplaceAll(comment, string(c), "")
	}
	return comment
}

func main() {
	// fmt.Println(disemvowel("This website is for losers LOL!"))
	// fmt.Println(usingRegex("This website is for losers LOL!"))
	fmt.Println(usingStrings("This website is for losers LOL!"))
}
