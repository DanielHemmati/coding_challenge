package main

import "fmt"

// really fun
// https://www.codewars.com/kata/54edbc7200b811e956000556/solutions/go
func CountTheSheep(numbers []bool) int {
	count := 0
	for _, v := range numbers {
		if v {
			count++
		}
	}
	return count
}

func main() {
	fmt.Println(CountTheSheep([]bool{true, true, true}))
}
