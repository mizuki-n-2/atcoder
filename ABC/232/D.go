package main

import (
	"fmt"
	"strings"
)

type Point struct {
	x, y, depth int
}

func main() {
	var h, w int
	fmt.Scan(&h, &w)

	ss := make([][]string, h)
	for i := 0; i < h; i++ {
		var s string
		fmt.Scan(&s)
		ss[i] = strings.Split(s, "")
	}

	dist := make(map[Point]bool)
	initial := Point{0, 0, 1}
	dist[initial] = true
	queue := []Point{initial}
	maxDepth := 1

	for len(queue) > 0 {
		p := queue[0]
		queue = queue[1:]

		if p.depth > maxDepth {
			maxDepth = p.depth
		}

		if p.y+1 <= h-1 && ss[p.y+1][p.x] == "." {
			p1 := Point{p.x, p.y + 1, p.depth + 1}
			if dist[p1] == false {
				queue = append(queue, p1)
				dist[p1] = true
			}
		}

		if p.x+1 <= w-1 && ss[p.y][p.x+1] == "." {
			p2 := Point{p.x + 1, p.y, p.depth + 1}
			if dist[p2] == false {
				queue = append(queue, p2)
				dist[p2] = true
			}
		}
	}

	fmt.Println(maxDepth)
}