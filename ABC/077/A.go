package main

import (
	"fmt"
	"strings"
)

func main() {
	var c1, c2 string
	fmt.Scan(&c1, &c2)

	sc1 := strings.Split(c1, "")
	sc2 := strings.Split(c2, "")

	if sc1[0] == sc2[2] && sc1[1] == sc2[1] && sc1[2] == sc2[0] {
		fmt.Println("YES")
	} else {
		fmt.Println("NO")
	}
}