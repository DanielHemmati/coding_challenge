package main

import (
	"fmt"
	"strings"
)

func CreatePhoneNumber(numbers [10]uint) string {
	return fmt.Sprintf("(%d%d%d) %d%d%d-%d%d%d%d", numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5], numbers[6], numbers[7], numbers[8], numbers[9])
}

// i really liked this
func ArrayToString(numbers string) string {
	return strings.Trim(strings.Replace(fmt.Sprint(numbers), " ", "", -1), "[]")
}

func main() {
	// fmt.Println(CreatePhoneNumber([10]uint{1, 2, 3, 4, 5, 6, 7, 8, 9, 0}))
	fmt.Println(ArrayToString("[1 2 3]"))
	// exampleTrim()
	// exampleReplace()
}

func exampleReplace() {
	str := "Hello, world!"
	newStr := strings.Replace(str, "world", "Go", 1)
	fmt.Printf("Original: '%s'\n", str)
	fmt.Printf("Replaced: '%s'\n", newStr)
}

func exampleTrim() {
	str := "[123]"
	trimmedStr := strings.Trim(str, "[]")
	fmt.Printf("Original: '%s'\n", str)
	fmt.Printf("Trimmed: '%s'\n", trimmedStr)
}
