package main

import (
	"fmt"
	"time"
)

func multiply(a int, b int) int {
	return a * b
}

func main() {
	fmt.Println(multiply(1, 2))
	fmt.Println(time.Now())
}
