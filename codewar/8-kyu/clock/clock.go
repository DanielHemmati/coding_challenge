package main

import "fmt"

func main() {
	h := ((0 * 60) * 60) * 1000
	m := (1 * 60) * 1000
	s := 1000
	fmt.Println(h + m + s)
}

func betterCode(h, m, s int) int {
	return (h*3600000 + m*60000 + s*1000)
}
