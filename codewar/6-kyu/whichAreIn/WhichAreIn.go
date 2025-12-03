package main

import (
	"fmt"
	"sort"
	"strings"
)

// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/go

// b/c codewar go version is old, just use `seen`
func contains(slice []string, val string) bool {
	for _, v := range slice {
		if v == val {
			return true
		}
	}
	return false
}

func InArray(array1 []string, array2 []string) []string {
	res := make([]string, 0)
	seen := make(map[string]bool)
	for _, word1 := range array1 {
		for _, word2 := range array2 {
			// if strings.Contains(word2, word1) && !slices.Contains(res, word1) {
			if strings.Contains(word2, word1) && !seen[word1] {
				seen[word1] = true
				res = append(res, word1)
			}
		}
	}
	sort.Strings(res)
	return res
}

func main() {
	a1 := []string{"arp", "live", "strong"}
	a2 := []string{"lively", "alive", "harp", "sharp", "armstrong"}
	fmt.Println(InArray(a1, a2))
}
