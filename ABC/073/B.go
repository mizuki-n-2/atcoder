package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func main() {
	var n int
	fmt.Scan(&n)

	sum := 0
	s := bufio.NewScanner(os.Stdin)
	for i := 0; s.Scan(); i++ {
		x := strings.Split(s.Text(), " ")
		l, _ := strconv.Atoi(x[0])
		r, _ := strconv.Atoi(x[1]) 
		sum += r - l + 1
	}

	fmt.Println(sum)
}
