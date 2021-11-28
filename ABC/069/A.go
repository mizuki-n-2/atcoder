package main

import "fmt"

func main() {
	var n, m int
	fmt.Scan(&n, &m)

	ans := (n-1)*(m-1)
	fmt.Println(ans)
}