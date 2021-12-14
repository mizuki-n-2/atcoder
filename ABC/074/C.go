package main

import (
	"fmt"
)

func main() {
	var a, b, c, d, e, f float64
	fmt.Scan(&a, &b, &c, &d, &e, &f)

	maxDensity := 0.0
	maxSugar := 0.0
	maxSugarWater := 100*a

	for i := 0; i <= 30; i++ {
		for j := 0; j <= 30; j++ {
			for k := 0; k <= 1500; k++ {
				for l := 0; l <= 1500; l++ {
					water := 100*a*float64(i) + 100*b*float64(j)
					sugar := c*float64(k) + d*float64(l)

					if water == 0 {
						break
					}

					if water+sugar > f {
						break
					}

					if e*water/100 >= sugar {
						sugarWater := sugar + water
						density := sugar / sugarWater
						if density > maxDensity {
							maxDensity = density
							maxSugar = sugar
							maxSugarWater = sugarWater
						}
					}
				}
			}
		}
	}

	fmt.Println(maxSugarWater, maxSugar)
}
