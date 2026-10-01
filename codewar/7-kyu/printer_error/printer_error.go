package main

import "fmt"

// https://www.codewars.com/kata/56541980fa08ab47a0000040/solutions/go

func PrinterError(s string) string {
	count := 0
	for _, char := range s {
		if char > 'm' {
			count++
		}
	}
	return fmt.Sprintf("%d/%d", count, len(s))
}

func main() {
	a := "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
	fmt.Println(PrinterError(a))
}
