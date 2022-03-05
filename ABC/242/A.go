package main

import (
	"fmt"
)

func main() {
	var a, b, c, x float64
	fmt.Scan(&a, &b, &c, &x)

	if x <= a {
		fmt.Println(1.0)
	} else if x <= b {
		fmt.Println(c/(b-a))
	} else {
		fmt.Println(0.0)
	}
}