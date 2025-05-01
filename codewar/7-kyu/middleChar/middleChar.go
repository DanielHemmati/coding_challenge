package main

import (
	"fmt"
)

func getmiddle(s string) string {
	if len(s) == 1 {
		return s
	}

	middle := len(s) / 2
	if len(s)%2 == 0 {
		return string(s[middle-1 : middle+1])
	}

	return string(s[middle])
}

func main() {
	fmt.Println(getmiddle("daniel"))
}

// legends solution
// https://chatgpt.com/share/68060e3b-1048-8006-a28f-1d049bba1231
func cool(s string) string {
	n := len(s)
	if n == 0 {
		return s
	}
	return s[(n-1)/2 : n/2+1]
}
