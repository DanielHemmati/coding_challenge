package main

import (
	"fmt"
)

func arrayDif(a, b []int) []int {
	lookupB := map[int]bool{}
	res := []int{}

	for _, value := range b {
		lookupB[value] = true
	}

	for _, value := range a {
		if lookupB[value] {
			continue
		} else {
			res = append(res, value)
		}
	}

	return res // a-b
}

func main() {
	fmt.Println(arrayDif([]int{1, 2, 2, 2, 3}, []int{2}))
}
