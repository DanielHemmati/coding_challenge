package main

import (
	"fmt"
	"regexp"
	"strings"
	"unicode"
)

func IsFirstCharUpper(s string) bool {
	if s == "" {
		return false
	}
	r := []rune(s)[0]
	return unicode.IsUpper(r) && unicode.IsLetter(r)
}

func Capitalize(word string) string {
	if word == "" {
		return word
	}

	runes := []rune(word)
	runes[0] = unicode.ToUpper(runes[0])
	return string(runes)
}

func ToCamelCase(s string) string {
	normalize := strings.FieldsFunc(s, func(r rune) bool {
		return r == '-' || r == '_'
	})

	var sb strings.Builder

	for _, word := range normalize {
		sb.WriteString(Capitalize(word))
	}

	result := sb.String()
	runes := []rune(result)

	if len(runes) == 0 {
		return ""
	}

	origUpper := IsFirstCharUpper(s)

	// if the first char in original string is not cap
	// then make the rune lower
	if !origUpper {
		runes[0] = unicode.ToLower(runes[0])
	}

	// otherwise just return what we have done in the loop
	return string(runes)
}

func main() {
	a := "the-stealth-warrior"
	b := "The_Stealth_Warrior"
	d := "the--stealth"
	fmt.Println(ToCamelCase(a))
	fmt.Println(ToCamelCase(b))

	fmt.Println(second(d))
}

// solutions
func second(s string) string {
	return regexp.MustCompile("-|_").ReplaceAllStringFunc(s, func(w string) string {
		return strings.ToUpper(w[1:])
	})
}
