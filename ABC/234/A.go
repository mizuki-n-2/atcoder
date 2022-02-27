package main

import (
	"fmt"
	"math"
)

func main() {
	var t float64
	fmt.Scan(&t)

	ans := f(f(f(t)+t)+f(f(t)))
	fmt.Println(int(ans))
}

func f(x float64) float64 {
	return math.Pow(x, 2)+2*x+3
}