package main

import (
	"fmt"
	"sort"
)

func main() {
	var n int
	fmt.Scan(&n)

	m := make(map[int64]int)

	for i := 0; i < n; i++ {
		var x int64
		fmt.Scan(&x)
		m[x]++
	}

	a := []int64{}

	for k, v := range m {
		if v >= 2 {
			for i := 2; i <= v; i += 2 {
				a = append(a, k)
			}	
		}
	}

	if len(a) >= 2 {
		sort.Slice(a, func(i, j int) bool { return a[i] > a[j] })
		fmt.Println(a[0] * a[1])
	} else {
		fmt.Println(0)
	}
}
