package main

import (
	"fmt"
	"math"
)

func main() {
	var x, y float64
	fmt.Scan(&x, &y)

	if x >= y {
		fmt.Println(0)
		return
	}

	ans := math.Ceil((y-x)/10)
	fmt.Println(ans)
}