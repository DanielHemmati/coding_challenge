package main

import "fmt"

// that's really cool
func MoveZeros(arr []int) []int {
	writeIndex := 0
	for i := range arr {
		if arr[i] != 0 {
			arr[writeIndex] = arr[i]
			writeIndex++
		}
	}

	for i := writeIndex; i < len(arr); i++ {
		arr[i] = 0
	}

	return arr
}

func main() {
	res := MoveZeros([]int{1, 2, 0, 1, 0, 1, 0, 3, 0, 1})
	fmt.Println(res)
}
