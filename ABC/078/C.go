package main

import (
	"fmt"
	"math"
)

func main() {
	var n, m float64
	fmt.Scan(&n, &m)

	ans := (1900*m+100*(n-m))*math.Pow(2, m)

	fmt.Println(ans)
}