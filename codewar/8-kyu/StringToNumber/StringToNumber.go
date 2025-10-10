package main

import (
	"fmt"
	"strconv"
)

func stringToNumber(str string) (int, error) {
	// if u don't want the error (not good by the way)
	// just use i, _ := strconv.Atoi(str)
	i, err := strconv.Atoi(str)
	if err != nil {
		fmt.Println("Error:", err)
		return 0, fmt.Errorf("invalid number %q: %w", str, err)
	}
	return i, nil
}

func main() {
	n, err := stringToNumber("42x")
	if err != nil {
		fmt.Println("Conversion failed:", err)
		return
	}
	fmt.Println("Converted:", n)
}
