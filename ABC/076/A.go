package main

import "fmt"

func main() {
	var r, g int
	fmt.Scan(&r, &g)

	ans := 2 * g - r

	fmt.Println(ans)
}