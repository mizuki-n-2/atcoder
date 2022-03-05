package main

import (
	"fmt"
)

func main() {
	var n int
	fmt.Scan(&n)

	a := make([][]int, n)
	a[0] = []int{1, 1, 1, 1, 1, 1, 1, 1, 1}

	for i := 1; i < n; i++ {
		a[i] = make([]int, 9)
		for j := 1; j <= 9; j++ {
			if j == 1 {
				a[i][j-1] += a[i-1][j-1]
				a[i][j-1] %= 998244353
				a[i][j] += a[i-1][j-1]
				a[i][j] %= 998244353
			} else if j == 9 {
				a[i][j-1] += a[i-1][j-1]
				a[i][j-1] %= 998244353
				a[i][j-2] += a[i-1][j-1]
				a[i][j-2] %= 998244353
			} else {
				a[i][j-1] += a[i-1][j-1]
				a[i][j-1] %= 998244353
				a[i][j-2] += a[i-1][j-1]
				a[i][j-2] %= 998244353
				a[i][j] += a[i-1][j-1]
				a[i][j] %= 998244353
			}
		}
	}

	sum := 0
	for i := 0; i < 9; i++ {
		sum += a[n-1][i]
	}

	fmt.Println(sum % 998244353)
}