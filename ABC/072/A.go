package main

import "fmt"

func main() {
	var x, t int
	fmt.Scan(&x, &t)

	if rest := x - t; rest > 0 {
		fmt.Println(rest)
	} else {
		fmt.Println(0)
	}
}