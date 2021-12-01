package main

import (
	"fmt"
	"strings"
)

func main() {
	var s string
	fmt.Scan(&s)

	alphabets := []string{"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"}

	for _, alphabet := range alphabets {
		if !strings.Contains(s, alphabet) {
			fmt.Println(alphabet)
			return
		}
	}

	fmt.Println("None")
}
