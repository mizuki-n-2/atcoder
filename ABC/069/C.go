package main

import (
	"fmt"
)

func main() {
	var n int 
	fmt.Scan(&n)

	// 4の倍数・・・1
	var a []int
	// 4の倍数でない2の倍数・・・2
	var b []int
	// その他・・・3
	var c []int
	for i := 0; i < n; i++ {
		var x int
		fmt.Scan(&x)
		if x % 4 == 0 {
			a = append(a, x)
		} else if x % 2 == 0 {
			b = append(b, x)
		} else {
			c = append(c, x)
		}
	}

	flag := true
	left := 1
	for i := 0; i < n; i++ {
		if left == 1 {
			if len(c) > 0 {
				c = c[1:]
				left = 3
			} else if len(b) > 0 {
				b = b[1:]
				left = 2
			} else {
				a = a[1:]
				left = 1
			}
		} else if left == 2 {
			if len(b) > 0 {
				b = b[1:]
				left = 2
			} else if len(a) > 0 {
				a = a[1:]
				left = 1
			} else {
				flag = false
			}
		} else {
			if len(a) > 0 {
				a = a[1:]
				left = 1
			} else {
				flag = false
			}
		}
	}
		
	if flag {
		fmt.Println("Yes")
	} else {
		fmt.Println("No")
	}
}