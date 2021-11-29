package main

import (
	"fmt"
	"math"
)

func main() {
	var a, b, c, d float64
	fmt.Scan(&a, &b, &c, &d)

	s := math.Max(a, c)
	e := math.Min(b, d)

	ans := e - s
	if ans >= 0 {
		fmt.Println(ans)
	} else {
		fmt.Println(0)
	}
}
