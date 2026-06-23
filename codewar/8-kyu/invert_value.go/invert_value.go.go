package main

import "fmt"

func invert(arr []int) []int {
	res := []int{}
	for _, v := range arr {
		res = append(res, v*-1)
	}
	return res
}

func betterSol(arr []int) []int {
	invArr := make([]int, len(arr))

	for i, num := range arr {
		invArr[i] = -num
	}

	return invArr
}

func main() {
	fmt.Println(invert([]int{1, 2, 3}))
	fmt.Println(betterSol([]int{1, 2, 3}))
}
