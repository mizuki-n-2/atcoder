package main

import (
	"fmt"
	"strings"
)

func main() {
	var s, t string
	fmt.Scan(&s, &t)

	ss := strings.Split(s, "")
	ts := strings.Split(t, "")

	m := make(map[string]int)
	m["a"] = 0
	m["b"] = 1
	m["c"] = 2
	m["d"] = 3
	m["e"] = 4
	m["f"] = 5
	m["g"] = 6
	m["h"] = 7
	m["i"] = 8
	m["j"] = 9
	m["k"] = 10
	m["l"] = 11
	m["m"] = 12
	m["n"] = 13
	m["o"] = 14
	m["p"] = 15
	m["q"] = 16
	m["r"] = 17
	m["s"] = 18
	m["t"] = 19
	m["u"] = 20
	m["v"] = 21
	m["w"] = 22
	m["x"] = 23
	m["y"] = 24
	m["z"] = 25

	k := m[ts[0]] - m[ss[0]]
	if k < 0 {
		k += 26
	}
	
	for i := 1; i < len(ss); i++ {
		x := m[ts[i]]-m[ss[i]]
		if x < 0 {
			x += 26
		}
		
		if x != k {
			fmt.Println("No")
			return
		}
	}

	fmt.Println("Yes")
}