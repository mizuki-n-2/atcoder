package main

import (
	"fmt"
)

func main() {
	var n int
	fmt.Scan(&n)

	max := 0
	ans := 1
	for i := 1; i <= n; i++ {
		count := 0
		num := i
		for num != 0 && num % 2 == 0 {
			num /= 2
			count++
		}
		if max < count {
			max = count
			ans = i
		}
	}

	fmt.Println(ans)
}