// https://www.codewars.com/kata/54da539698b8a2ad76000228/train/go
package main

import "fmt"

// solved
func countOccurence[T comparable](slice []T, target T) int {
	count := 0
	for _, v := range slice {
		if v == target {
			count++
		}
	}
	return count
}

func IsValidWalk(walk []rune) bool {
	if len(walk) != 10 {
		return false
	}
	return countOccurence(walk, 'n') == countOccurence(walk, 's') && countOccurence(walk, 'e') == countOccurence(walk, 'w')
}

func main() {
	a := []rune{'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'}
	fmt.Println(IsValidWalk(a))
}
