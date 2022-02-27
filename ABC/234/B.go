package main

import (
	"fmt"
	"math"
)

func main() {
	var n int
	fmt.Scan(&n)

	p := make([][]int, n)
	for i := 0; i < n; i++ {
		p[i] = make([]int, 2)
		fmt.Scan(&p[i][0], &p[i][1])
	}

	max := 0.0
	for i := 0; i < n; i++ {
		for j := i+1; j < n; j++ {
			d := math.Pow(float64(p[i][0]-p[j][0]), 2) + math.Pow(float64(p[i][1]-p[j][1]), 2)
			if d > max {
				max = d
			}
		}
	}

	fmt.Println(math.Sqrt(max))
}