package main

import "fmt"

func Solution(word string) string {
	runes := []rune(word)
	for i, j := 0, len(word)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/go
func main() {
	// Solution("daniel")
	solution2("daniel")
}

// other solution

func solution2(word string) string {
	var emptyString = ""
	for _, c := range word {
		fmt.Println(string(c))
		emptyString = string(c) + emptyString
		fmt.Println(emptyString)
	}
	// fmt.Println(emptyString)
	return emptyString
}
