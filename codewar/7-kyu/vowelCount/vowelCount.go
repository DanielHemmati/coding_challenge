package main

import (
	"fmt"
	"regexp"
	"strings"
)

func getCount(str string) (count int) {
	vowels := map[rune]bool{
		'a': true, 'e': true, 'i': true, 'o': true, 'u': true,
		'A': true, 'E': true, 'I': true, 'O': true, 'U': true,
	}

	count = 0
	for _, c := range str {
		if vowels[c] {
			count += 1
		}
	}
	fmt.Println(count)
	return count
}

func main() {
	// getCount("abracadabra")
	// fmt.Println(secondSol("abracadabra"))
	// exampleStringsCount()
	fmt.Println(usingRegex("abracadabra"))
}

// solutions

func secondSol(str string) int {
	count := 0

	vowels := []string{"a", "e", "i", "o", "u"}

	for _, vowel := range vowels {
		count += strings.Count(str, vowel)
	}

	return count
}

// nice
func exampleStringsCount() {
	str := "hello world"
	substr := "l"
	count := strings.Count(str, substr)
	fmt.Printf("The substring '%s' appears %d times in '%s'\n", substr, count, str)
}

func usingRegex(str string) int {
	r := regexp.MustCompile("[aeiou]")
	vowels := r.FindAllString(str, -1)
	return len(vowels)
}

func thirdSolutino(str string) (count int) {
	for _, c := range str {
		switch c {
		case 'a', 'e', 'i', 'o', 'u':
			count++
		}
	}
	return count
}
