package main

import (
	"fmt"
	"bufio"
	"os"
	"strconv"
)

func main() {
	sc := bufio.NewScanner(os.Stdin)
	sc.Split(bufio.ScanWords)

	s := make([]int, 10)
	for i := 0; i < 10; i++ {
		sc.Scan()
		s[i], _ = strconv.Atoi(sc.Text())
	}

	ans := s[0]
	for i := 0; i < 2; i++ {
		ans = s[ans]
	}

	fmt.Println(ans)
}