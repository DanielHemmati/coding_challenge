package main

import (
	"fmt"
	"strconv"
	"strings"
)

func DigitalRoot(n int) int {
	res := 0
	partInString := strings.Split(strconv.Itoa(n), "")

	for _, value := range partInString {
		num, _ := strconv.Atoi(value)
		res += num
	}

	return res
}

// this is way better
func withHelp(n int) int {
	for n >= 10 {
		sum := 0
		for _, digits := range strconv.Itoa(n) {
			num, _ := strconv.Atoi(string(digits))
			sum += num
		}
		n = sum
	}
	return n
}

// https://chatgpt.com/share/67e3ac16-94e0-8006-906a-30f52dd0f987
func talkingWithChatGPT(n int) int {
	if n == 0 {
		return 0
	}
	return 1 + (n-1)%9
}

func main() {
	fmt.Println(talkingWithChatGPT(29))
}
