package main

import (
	"fmt"
	"math"
	"regexp"
	"strings"
)

func disemvowel(comment string) string {
	vowels := map[rune]bool{
		'a': true, 'e': true, 'i': true, 'o': true, 'u': true,
		'A': true, 'E': true, 'I': true, 'O': true, 'U': true,
	}

	emptyString := []rune{}
	for _, c := range comment {
		if !vowels[c] {
			emptyString = append(emptyString, c)
		}
	}

	return string(emptyString)
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

func test(x int) int {
	return -int(math.Abs(float64(x)))
}
