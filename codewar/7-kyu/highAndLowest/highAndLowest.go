package main

import (
	"fmt"
	"sort"
	"strconv"
	"strings"
)

// well this did passed the test. i am impressed of myself let's go
func HighAndLow(in string) string {
	stringNumberSlice := strings.Split(in, " ")
	numberSlice := []int{}
	res := ""

	for _, n := range stringNumberSlice {
		n, err := strconv.Atoi(n)
		// i have to learn more about this
		if err != nil {
			continue
		}
		numberSlice = append(numberSlice, n)
	}

	sort.Ints(numberSlice)

	res += strconv.Itoa(numberSlice[len(numberSlice)-1])
	res += " "
	res += strconv.Itoa(numberSlice[0])

	return res
}

func testSort(items []int) []int {
	sort.Ints(items)
	return items
}

// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/go
func main() {
	fmt.Println(HighAndLow("1 2 3 4 5")) // return "5 1"
	// input := []int{9, 8, 7, 4, 3, 2, 1}
	// res := testSort(input)[len(input)-1]
	// fmt.Println(res)
}

// other solution
