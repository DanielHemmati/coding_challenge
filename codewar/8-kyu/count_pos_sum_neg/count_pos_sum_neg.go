package main

import "fmt"

// url: https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/go

func CountPositivesSumNegatives(numbers []int) []int {
	var res []int
	countPos := 0
	sumNeg := 0

	for _, n := range numbers {
		if n > 0 {
			countPos += 1
		}

		if n < 0 {
			sumNeg += n
		}
	}

	res = append(res, countPos)
	res = append(res, sumNeg)
	return res // your code here
}

// more elegant solution
func elegant(numbers []int) []int {
	res := []int{0, 0}
	for _, v := range numbers {
		if v > 0 {
			res[0] += 1
		} else {
			res[1] += v
		}
	}
	return res
}

func main() {
	a := []int{1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15}
	fmt.Println(CountPositivesSumNegatives(a))
	fmt.Println(elegant(a))
}
