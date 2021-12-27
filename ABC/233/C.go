package main

import (
	"fmt"
	"os"
	"bufio"
	"strconv"
)

var count = 0
var n, x int
var ss [][]int

func nextInt(sc *bufio.Scanner) int {
	sc.Scan()
	i, e := strconv.Atoi(sc.Text())
	if e != nil {
		panic(e)
	}
	return i
}

func main() {
	fmt.Scan(&n, &x)

	sc := bufio.NewScanner(os.Stdin)
	sc.Split(bufio.ScanWords)

	ss = make([][]int, n)
	for i := 0; i < n; i++ {
		l := nextInt(sc)
		for j := 0; j < l; j++ {
			ss[i] = append(ss[i], nextInt(sc))
		}
	}

	dfs(0, 1)

	fmt.Println(count)
}

func dfs(pos int, mul int) {
	if pos == n {
		if mul == x {
			count++
		}
		return
	}

	for _, v := range ss[pos] {
		// オーバーフロー対策
		if mul*v/v != mul {
			continue
		}
		dfs(pos+1, mul*v)
	}
}