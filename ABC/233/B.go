package main

import (
	"fmt"
	"strings"
)

func main() {
	var l, r int
	fmt.Scan(&l, &r)

	var s string
	fmt.Scan(&s)

	ss := strings.Split(s, "")

	var rs []string
	for i := l-1; i <= r-1; i++ {
		rs = append(rs, ss[i])
	}

	for i := 0; i < len(rs); i++ {
		ss[l-1+i] = rs[len(rs)-1-i]
	}

	fmt.Println(strings.Join(ss, ""))
}
