package main

import "fmt"

func main() {
	var n, a int
	fmt.Scan(&n, &a)

	ans := n*n - a
	fmt.Println(ans)
}
