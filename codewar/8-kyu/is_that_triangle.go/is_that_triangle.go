package main

import "fmt"

func isTriangle(a, b, c int) bool {
	if a+b > c && a+c > b && b+c > a {
		return true
	}
	return false
}

func shorter(a, b, c int) bool {
	return a+b > c && a+c > b && b+c > a
}

func main() {
	fmt.Println(shorter(1, 2, 3))
}
