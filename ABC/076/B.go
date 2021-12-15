package main

import (
	"fmt"
)

func main() {
	var n, k int
	fmt.Scan(&n, &k)

	x := 1
	for i := 0; i < n; i++ {
		if x+k < 2*x {
			x += k
		} else {
			x *= 2
		}
	}

	fmt.Println(x)
}
