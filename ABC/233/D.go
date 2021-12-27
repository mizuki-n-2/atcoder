package main

import (
	"fmt"
	"bufio"
	"os"
	"strconv"
)

func main() {
	var n, k int
	fmt.Scan(&n, &k)

	sc := bufio.NewScanner(os.Stdin)
	sc.Split(bufio.ScanWords)

	a := make([]int, n)
	for i := 0; i < n; i++ {
		sc.Scan()
		a[i], _ = strconv.Atoi(sc.Text())
	}

	count := 0

	s := make([]int, n+1)
	for i := 0; i < n; i++ {
		s[i+1] = s[i]+a[i]
	}

	m := make(map[int]int)
	for r := 1; r <= n; r++ {
		m[s[r-1]]++
		count += m[s[r]-k]
	}

	fmt.Println(count)
}