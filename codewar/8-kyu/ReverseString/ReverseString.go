package main

import "fmt"

func Solution(word string) string {
	runes := []rune(word)
	for i, j := 0, len(word)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func coolestReverse(word string) string {
	result := ""
	for _, c := range word {
		result = string(c) + result
	}
	return result
}

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/go
func main() {
	// Solution("daniel")
	fmt.Println(coolestReverse("daniel"))
}
