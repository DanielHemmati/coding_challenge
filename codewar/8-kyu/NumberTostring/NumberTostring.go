package main

import (
	"fmt"
	"reflect"
	"strconv"
)

func main() {
	// value := "Hello, go"
	a := 123
	res := strconv.Itoa(a)
	if reflect.TypeOf(res).Kind() == reflect.String {
		fmt.Println("the value is a string")
	} else {
		fmt.Println("The value is not string")
	}
}
