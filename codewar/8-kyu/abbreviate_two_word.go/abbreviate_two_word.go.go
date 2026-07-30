package main

import (
	"fmt"
	"strings"
)

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/solutions/go

func AbbrevName(name string) string {
	parts := strings.Fields(name)
	firstChar := string(parts[0][0])
	secondChar := string(parts[1][0])
	return strings.ToUpper(firstChar + "." + secondChar)
}

// https://chatgpt.com/c/6a6bb676-7508-83ed-87ac-7782896e41c3
// really clever
func cleverSolution(name string) string {
	x := strings.Index(name, " ")
	return strings.ToUpper(string(name[0]) + "." + string(name[x+1]))
}

func main() {
	fmt.Println(AbbrevName("daniel hemmati"))
	// fmt.Println(cleverSolution("daniel hemmati"))
}
