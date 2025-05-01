package main

import (
	"fmt"
)

func Solution(str string) []string {
	var res []string

	if len(str)%2 != 0 {
		str += "_"
	}

	for i := 0; i < len(str); i += 2 {
		res = append(res, string(str[i:i+2]))
	}
	fmt.Println(res)
	return res
}

func main() {
	a := "daniel"
	fmt.Println(len(a), a[4:6])
	// fmt.Println(Solution("danie"))
}
