package main

import "fmt"

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/go
func intToDigits(n int) []int {
	if n == 0 {
		return []int{0}
	}
	var digits []int
	for n > 0 {
		digits = append(digits, n%10)
		n /= 10
	}
	return digits
}

func Digitize(n int) []int {
	return intToDigits(n)
}

func main() {
	fmt.Println(intToDigits(123))
}
