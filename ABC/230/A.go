package main

import "fmt"

func main() {
	var n int
	fmt.Scan(&n)

	if n >= 42 {
		fmt.Printf("AGC0%d\n", n+1)
	} else {
		if n >= 10 {
			fmt.Printf("AGC0%d\n", n)
		} else {
			fmt.Printf("AGC00%d\n", n)
		}
	}
}