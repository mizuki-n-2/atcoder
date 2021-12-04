package main

import (
	"fmt"
	"strings"
)

func main() {
	var n, a, b int
	fmt.Scan(&n, &a, &b)

	var p, q, r, s int
	fmt.Scan(&p, &q, &r, &s)

	res := make([][]string, q-p+1)

	for i := 0; i < q-p+1; i++ {
		s := strings.Repeat(".", s-r+1)
		res[i] = strings.Split(s, "")
	}

	for i := 0; i < q-p+1; i++ {
		for j := 0; j < s-r+1; j++ {
			x := p + i
			y := r + j
			if x-y == a-b || x+y == a+b {
				res[i][j] = "#"
			}
		}
	}

	for _, row := range res {
		fmt.Println(strings.Join(row, ""))
	}
}
