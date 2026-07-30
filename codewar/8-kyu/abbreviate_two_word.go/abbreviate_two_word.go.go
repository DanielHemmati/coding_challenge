package main

import (
	"fmt"
	"strings"
)

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/go
func AbbrevName(name string) string {
	parts := strings.Fields(name)
	firstChar := strings.ToUpper(string(parts[0][0]))
	secondChar := strings.ToUpper(string(parts[1][0]))
	return firstChar + "." + secondChar
}

func main() {
	fmt.Println(AbbrevName("daniel hemmati"))
}
