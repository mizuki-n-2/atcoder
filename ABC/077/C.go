package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
	"strconv"
)

func main() {
	var n int
	fmt.Scan(&n)

	sc := bufio.NewScanner(os.Stdin)
	sc.Split(bufio.ScanWords)

	count := 0
	ss := make([][]int, 3)
	for i := 0; i < 3; i++ {
		s := make([]int, n)
		for j := 0; j < n; j++ {
			sc.Scan()
			s[j], _ = strconv.Atoi(sc.Text())
		}
		ss[i] = s
	}

	sort.Ints(ss[0])
	sort.Ints(ss[2])
	fmt.Println(ss)
	for i := 0; i < n; i++ {
		b := ss[1][i]
		fmt.Println(b)
		fmt.Println("----------------")
		a := sort.Search(len(ss[0]), func(k int) bool {
			return ss[0][k] > b
		})
		fmt.Println(a)
		c := sort.Search(len(ss[2]), func(k int) bool {
			return ss[2][k] <= b
		})
		fmt.Println(c)
		count += a * c
		fmt.Println("----------------")
	}

	fmt.Println(count)
}
