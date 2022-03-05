package main

import (
	"fmt"
	"sort"
	"strings"
)

func main() {
	var s string
	fmt.Scan(&s)

	ss := strings.Split(s, "")
	sort.Strings(ss)
	
	fmt.Println(strings.Join(ss, ""))
}