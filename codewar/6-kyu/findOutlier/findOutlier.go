package main

import (
	"fmt"
)

type Outlier struct {
	evenCount int
	evenSlice []int
	oddCount  int
	oddSlice  []int
}

func findOutlier(integers []int) int {
	outlier := Outlier{
		evenCount: 0,
		evenSlice: []int{},
		oddCount:  0,
		oddSlice:  []int{},
	}

	for _, n := range integers {
		if n%2 == 0 {
			outlier.evenCount++
			outlier.evenSlice = append(outlier.evenSlice, n)
		} else {
			outlier.oddCount++
			outlier.oddSlice = append(outlier.oddSlice, n)
		}
	}

	if outlier.evenCount > 1 {
		return outlier.oddSlice[0]
	}

	return outlier.evenSlice[0]
}

func main() {
	fmt.Println(findOutlier([]int{2, 4, 0, 100, 4, 11, 2602, 36}))
	fmt.Println(findOutlier([]int{160, 3, 1719, 19, 11, 13, -21}))
}

// better solution for myself
func second(integers []int) int {
	var even, odd []int
	for _, n := range integers {
		if n%2 == 0 {
			even = append(even, n)
		} else {
			odd = append(odd, n)
		}
	}

	if len(even) == 1 {
		return odd[0]
	}

	return odd[0]
}

// but this one is way smarter
