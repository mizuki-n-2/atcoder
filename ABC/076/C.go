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

	if len(ss) < len(ts) {
		fmt.Println("UNRESTORABLE")
		return
	}

	index := -1

	for i := len(ss) - 1; i >= 0; i-- {
		count := 0
		for j := len(ts)-1; j >= 0; j-- {
			if i+j >= len(ss) {
				break
			}

			if ss[i+j] == "?" || ss[i+j] == ts[j] {
				count++
			}
		}

		if count == len(ts) {
			index = i
			break
		}
	}

	if index == -1 {
		fmt.Println("UNRESTORABLE")
		return
	}

	for i := index; i < index+len(ts); i++ {
		if ss[i] == "?" {
			ss[i] = ts[i-index]
		}
	}

	for i := 0; i < len(ss); i++ {
		if ss[i] == "?" {
			ss[i] = "a"
		}
	}

	fmt.Println(strings.Join(ss, ""))
}
