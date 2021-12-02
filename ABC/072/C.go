package main

import (
	"fmt"
	"sort"
)

func main() {
	var n int
	fmt.Scan(&n)

	var a []int
	for i := 0; i < n; i++ {
		var b int
		fmt.Scan(&b)
		a = append(a, b)
	}

	m := make(map[int]int)
	for _, v := range a {
		m[v-1]++
		m[v]++
		m[v+1]++
	}

	slice := make([]int, 0, len(m))
	for _, v := range m {
		slice = append(slice, v)
	}

	sort.Slice(slice, func(i, j int) bool {
		return slice[i] > slice[j]
	})

	fmt.Println(slice[0])
}
