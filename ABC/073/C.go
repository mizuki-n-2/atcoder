package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	var n int
	fmt.Scan(&n)
	
	s := bufio.NewScanner(os.Stdin)
	m := make(map[string]bool)
	count := 0
	for i := 0; s.Scan(); i++ {
		x := s.Text()
		if m[x] {
			m[x] = false
			count--
		} else {
			m[x] = true
			count++
		}
	}

	fmt.Println(count)
}