package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
)

func main() {
	var n, m int
	fmt.Scan(&n, &m)

	sc := bufio.NewScanner(os.Stdin)
	sc.Split(bufio.ScanWords)

	sn := make([]int, n)
	for i := 0; i < n; i++ {
		sc.Scan()
		sn[i], _ = strconv.Atoi(sc.Text())
	}

	sm := make([]int, m)
	for i := 0; i < m; i++ {
		sc.Scan()
		sm[i], _ = strconv.Atoi(sc.Text())
	}

	for _, v := range sm {
		idx := find(sn, v)
		if idx == -1 {
			fmt.Println("No")
			return
		}
		_, sn, _ = delete(sn, idx)
	}

	fmt.Println("Yes")
}

func find(a []int, x int) int {
	for i, n := range a {
		if x == n {
			return i
		}
	}

	return -1
}

func delete(slice []int, i int) (int, []int, error) {
	ret := slice[i]
	if len(slice) < i || len(slice) < i {
		return 0, nil, fmt.Errorf("Error")
	}
	ans := make([]int, len(slice))
	copy(ans, slice)

	ans = append(slice[:i], slice[(i+1):]...)

	return ret, ans, nil
}
