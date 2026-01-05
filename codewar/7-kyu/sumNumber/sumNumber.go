package main

import "fmt"

func Range(a, b int) []int {
	var r []int

	if a <= b {
		r = make([]int, b-a+1)
		for i := range r {
			r[i] = a + i
		}
	} else {
		r = make([]int, a-b+1)
		for i := range r {
			r[i] = b + i
		}
	}

	return r
}

func GetSum(a, b int) int {
	total := 0
	for _, i := range Range(a, b) {
		total += i
	}
	return total
}

func GenericSum[T ~int | ~float64](nums []T) T {
	var total T

	for _, v := range nums {
		total += v
	}
	return total
}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func MySecondSol(a, b int) int {
	n := abs(b-a) + 1
	return n * (a + b) / 2
}

func main() {
	fmt.Println(GetSum(1, 100))
	fmt.Println(MySecondSol(1, 100))
}
