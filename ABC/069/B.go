package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	var s string
	fmt.Scan(&s)
	x := strings.Split(s, "")
	length := len(x[1 : len(x)-1])

	fmt.Println(x[0] + strconv.Itoa(length) + x[len(x)-1])
}
