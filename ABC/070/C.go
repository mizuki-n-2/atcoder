package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	var a uint64
	fmt.Scan(&a)
	for i := 1; i < n; i++ {
		var b uint64
		fmt.Scan(&b)
		a = lcm(a, b)
	}

	fmt.Println(a)
}

func gcd(a, b uint64) uint64 {
	if b == 0 {
		return a
	}
	return gcd(b, a%b)
}

func lcm(a, b uint64) uint64 {
	return a / gcd(a, b) * b
}