package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func main() {
	var n int
	fmt.Scan(&n)

	sc := bufio.NewScanner(os.Stdin)
	sc.Split(bufio.ScanWords)

	ss := make([][]string, n)
	for i := 0; i < n; i++ {
		sc.Scan()
		ss[i] = strings.Split(sc.Text(), "")
	}

	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			// 横について
			if j + 6 <= n {
				y_count := 0
				for k := 0; k < 6; k++ {
					if ss[i][j+k] == "#" {
						y_count++
					}
				}
				if y_count >= 4 {
					fmt.Println("Yes")
					return
				}
			}

			// 縦について
			if i + 6 <= n {
				t_count := 0
				for k := 0; k < 6; k++ {
					if ss[i+k][j] == "#" {
						t_count++
					}
				}
				if t_count >= 4 {
					fmt.Println("Yes")
					return
				}
			}

			// 斜め(右)について
			if i + 6 <= n && j + 6 <= n {
				n_count := 0
				for k := 0; k < 6; k++ {
					if ss[i+k][j+k] == "#" {
						n_count++
					}
				}
				if n_count >= 4 {
					fmt.Println("Yes")
					return
				}
			}

			// 斜め(左)について
			if i + 6 <= n && j - 5 >= 0 {
				n_count := 0
				for k := 0; k < 6; k++ {
					if ss[i+k][j-k] == "#" {
						n_count++
					}
				}
				if n_count >= 4 {
					fmt.Println("Yes")
					return
				}
			}
		}
	}

	fmt.Println("No")
}
