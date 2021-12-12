package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
) 

func main() {
	in := bufio.NewReader(os.Stdin)
	var n, q int
	fmt.Fscan(in, &n, &q)

	a := make([]int, n)
	for i := range a {
		fmt.Fscan(in, &a[i])
	}
	
	sort.Ints(a)
	for i := 0; i < q; i++ {
		var x int
		fmt.Fscan(in, &x)
		j := sort.Search(n, func(k int) bool {
			return a[k] >= x
		})
		fmt.Println(n - j)
	}
}