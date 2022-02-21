package main

import (
	"fmt"
)

func main() {
	var x, y, z int
	fmt.Scan(&x, &y, &z)

	x -= 2*z
	a := x / (y + z)
	b := (x % (y + z)) / y
	if b >= 1 {
		a++
	}

	fmt.Println(a)
}