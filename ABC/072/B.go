package main

import (
	"fmt"
	"strings"
)

func main() {
	var s string
	fmt.Scan(&s)

	res := []string{}
	for i := 0; i < len(s); i += 2 {
		res = append(res, string(s[i]))
	}

	fmt.Println(strings.Join(res, ""))
}