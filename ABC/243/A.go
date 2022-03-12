package main

import (
	"fmt"
	"math"
)

func main() {
	var v, a, b, c float64
	fmt.Scan(&v, &a, &b, &c)

	rest := v

	total := a+b+c
	if total <= v {
		rest -= total*math.Floor(v/total)
	}
	
	rest -= a
	if rest < 0 {
		fmt.Println("F")
		return
	}

	rest -= b
	if rest < 0 {
		fmt.Println("M")
		return
	}

	fmt.Println("T")
}