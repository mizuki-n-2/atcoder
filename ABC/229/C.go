package main

import (
	"bufio"
	"fmt"
	"os"
	"sort"
)

func main() {
	var n, w int
	fmt.Scan(&n, &w)

	nums := make([][]int, n)
	s := bufio.NewScanner(os.Stdin)
	for i := 0; s.Scan(); i++ {
		nums[i] = make([]int, 2)
		fmt.Sscan(s.Text(), &nums[i][0], &nums[i][1])
	}

	sort.Slice(nums, func(i, j int) bool {
		return nums[i][0] > nums[j][0]
	})

	var rest = w;
	var sum = 0;
	for i := 0; i < len(nums); i++ {
		if rest - nums[i][1] >= 0 {
			rest -= nums[i][1]
			sum += nums[i][0] * nums[i][1]
		} else {
			sum += nums[i][0] * rest
			rest = 0
		}
	}

	fmt.Println(sum)
}