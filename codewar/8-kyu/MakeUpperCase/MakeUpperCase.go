package main

import (
	"fmt"
	"strings"
)

func makeUpperCase(str string) string {
	return strings.ToUpper(str)
}

func main() {
	fmt.Println(makeUpperCase("daniel"))
}
