package main

import (
	"fmt"
	"math"
)

func main() {
	var n int
	var k float64
	fmt.Scan(&n, &k)

	x := make([]float64, n)
	for i := 0; i < n; i++ {
		fmt.Scan(&x[i])
	}

	sum := 0.0
	for j := 0; j < n; j++ {
		left := math.Abs(x[j])
		right := math.Abs(k - x[j])

		min := math.Min(left, right)
		sum += min * 2
	}

	fmt.Println(sum)
}
