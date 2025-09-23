package main

import (
	"fmt"
	"strings"
)

func Solution(str, ending string) bool {
	return strings.HasSuffix(str, ending)
}

func main() {
	s := "abc"
	ending := "d"
	fmt.Println(Solution(s, ending))
}
