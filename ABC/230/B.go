package main

import (
	"fmt"
	"strings"
)

func main() {
	var s string
	fmt.Scan(&s)

	strs := strings.Split(s, "")

	s1 := [3]string{"o", "x", "x"}
	s2 := [3]string{"x", "x", "o"}
	s3 := [3]string{"x", "o", "x"}

	s1Flag := true
	for i := 0; i < len(strs); i++ {
		if strs[i] != s1[i%3] {
			s1Flag = false
			break
		}
	}

	s2Flag := true
	for i := 0; i < len(strs); i++ {
		if strs[i] != s2[i%3] {
			s2Flag = false
			break
		}
	}

	s3Flag := true
	for i := 0; i < len(strs); i++ {
		if strs[i] != s3[i%3] {
			s3Flag = false
			break
		}
	}

	if s1Flag || s2Flag || s3Flag {
		fmt.Println("Yes")
	} else {
		fmt.Println("No")
	}
}