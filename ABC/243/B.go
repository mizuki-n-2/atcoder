package main

import (
	"fmt"
	"bufio"
	"os"
	"strconv"
)

func main() {
	var n int
	fmt.Scan(&n)

	sc := bufio.NewScanner(os.Stdin)
	sc.Split(bufio.ScanWords)

	an := make([]int, n)
	for i := 0; i < n; i++ {
		sc.Scan()
		an[i], _ = strconv.Atoi(sc.Text())
	}

	bn := make([]int, n)
	for i := 0; i < n; i++ {
		sc.Scan()
		bn[i], _ = strconv.Atoi(sc.Text())
	}

	ans1 := 0
	for i := 0; i < n; i++ {
		if an[i] == bn[i] {
			ans1++
		}
	}
	fmt.Println(ans1)

	ans2 := 0
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if i != j && an[i] == bn[j] {
				ans2++
			}
		}
	}
	fmt.Println(ans2)
}