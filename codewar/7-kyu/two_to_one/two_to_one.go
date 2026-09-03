package main

import (
	"fmt"
	"slices"
	"strings"
)

// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/train/go

func unique(s string) string {
	seen := make(map[rune]bool)
	var result strings.Builder

	for _, char := range s {
		if !seen[char] {
			seen[char] = true
			result.WriteString(string(char))
		}
	}

	return result.String()
}

func sortString(s string) string {
	chars := []rune(s)

	slices.Sort(chars)

	return string(chars)
}

func TwoToOne(s1, s2 string) string {
	sum := s1 + s2
	res := unique(sum)
	return sortString(res)
}

func main() {
	// fmt.Println(TwoToOne("xyaabbbccccdefww", "xxxxyyyyabklmopq"))
	// fmt.Println(TwoToOne("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"))

	fmt.Println(twoToOnePerformant("xyaabbbccccdefww", "xxxxyyyyabklmopq"))
	fmt.Println(twoToOnePerformant("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"))
}

// performant solution

// https://chatgpt.com/c/6a992aaa-c134-83eb-8c25-8a90e80a2bac
// continue the challegne given by chatgpt. it seems really fun
func twoToOnePerformant(s1, s2 string) string {
	var seen [26]bool

	for i := range len(s1) {
		seen[s1[i]-'a'] = true
	}

	for i := range len(s2) {
		seen[s2[i]-'a'] = true
	}

	result := make([]byte, 0, 26)

	for i := range 26 {
		if seen[i] {
			result = append(result, byte('a'+i))
		}
	}

	return string(result)
}
