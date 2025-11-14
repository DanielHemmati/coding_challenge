package main

import (
	"fmt"
	"strings"
)

func DNAString(dna string) string {
	pairs := map[string]string{
		"A": "T",
		"T": "A",
		"C": "G",
		"G": "C",
	}
	var res string
	for _, el := range strings.Split(dna, "") {
		if v, ok := pairs[el]; ok {
			res += v
		}
	}
	return res
}

func secondSolution(dna string) string {
	pairs := map[byte]byte{
		'A': 'T',
		'T': 'A',
		'C': 'G',
		'G': 'C',
	}

	res := make([]byte, len(dna))
	for i := 0; i < len(dna); i++ {
		res[i] = pairs[dna[i]]
	}

	return string(res)
}

func main() {
	fmt.Println(DNAString("ATTGC"))
	a := "ATTGC"
	fmt.Println(a[0])
}

// other solution
