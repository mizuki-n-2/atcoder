package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	var s string
	fmt.Scan(&s)
	n := strings.Split(s, "")
	x, _ := strconv.Atoi(n[0])
	y, _ := strconv.Atoi(n[2])
	fmt.Println(x*y)
}
