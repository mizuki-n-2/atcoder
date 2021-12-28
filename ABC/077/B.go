package main

import (
	"fmt"
)

func main() {
	var n int
	fmt.Scan(&n)

	ans := 1
	for i := 1; i <= n; i++ {
		if i*i <= n {
			ans = i*i
		}
	}

	fmt.Println(ans)
}