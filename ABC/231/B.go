package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var n int
	fmt.Scan(&n)

	m := make(map[string]int)
	s := bufio.NewScanner(os.Stdin)
	for i := 0; s.Scan(); i++ {
		m[s.Text()]++
	}

	max := 0
	maxName := ""
	for k, v := range m {
		if v > max {
			max = v
			maxName = k
		}
	}

	fmt.Println(maxName)
}
