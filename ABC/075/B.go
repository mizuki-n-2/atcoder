package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	var h, w int
	fmt.Scan(&h, &w)

	s := make([][]string, h)
	for i := 0; i < h; i++ {
		var si string
		fmt.Scan(&si)
		s[i] = strings.Split(si, "")
	}

	for j := 0; j < h; j++ {
		for k := 0; k < w; k++ {
			if s[j][k] == "." {

				count := 0

				// 左上
				if j > 0 && k > 0 && s[j-1][k-1] == "#" {
					count++
				}

				// 上
				if j > 0 && s[j-1][k] == "#" {
					count++
				}

				// 右上
				if j > 0 && k < w-1 && s[j-1][k+1] == "#" {
					count++
				}

				// 左
				if k > 0 && s[j][k-1] == "#" {
					count++
				}

				// 右
				if k < w-1 && s[j][k+1] == "#" {
					count++
				}

				// 左下
				if j < h-1 && k > 0 && s[j+1][k-1] == "#" {
					count++
				}

				// 下
				if j < h-1 && s[j+1][k] == "#" {
					count++
				}

				// 右下
				if j < h-1 && k < w-1 && s[j+1][k+1] == "#" {
					count++
				}

				s[j][k] = strconv.Itoa(count)
			}
		}
		fmt.Println(strings.Join(s[j], ""))
	}
}
