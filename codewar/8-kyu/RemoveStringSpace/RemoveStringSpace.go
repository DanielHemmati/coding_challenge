package main

import (
	"fmt"
	"strings"
)

// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/go
func NoSpace(word string) string {
	return strings.ReplaceAll(word, " ", "")
}

func main() {
	s := "  daniel hemmati   "
	fmt.Println(NoSpace(s))
}
