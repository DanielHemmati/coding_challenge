package main

import "fmt"

// p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
func NbYear(p0 int, percent float64, aug int, p int) int {
	count := 0
	for p0 < p { // pass it just by removing it equal sign
		growth := float64(p0) * (percent / 100)
		p0 = p0 + int(growth) + aug
		fmt.Println(p0)
		count++
	}
	return count
}

func main() {
	fmt.Println(NbYear(1500, 5, 100, 5000))
}
