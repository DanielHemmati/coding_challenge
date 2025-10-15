package main

// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/go
import (
	"fmt"
	"strings"
)

func Accum(s string) string {
	chars := strings.Split(s, "")

	var res []string
	for i, w := range chars {
		repeated := strings.Repeat(strings.ToLower(w), i+1)
		repeated = strings.ToUpper(repeated[:1]) + repeated[1:]
		res = append(res, repeated)
	}

	return strings.Join(res, "-")
}

func main() {
	fmt.Println(Accum("abcd"))
}
