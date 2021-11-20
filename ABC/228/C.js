"use strict";

const main = (args) => {
  const input = args.trim().split("\n");
  const [n, k] = input[0].split(" ").map(n => parseInt(n));

  let points = [];
  for (let i = 1; i <= n; i++) {
    points.push(input[i].split(" ").map(n => parseInt(n)));
  }

  let sums = [];
  for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      sum += points[i][j];
    }
    sums.push(sum)
  }

  let sums2 = sums.concat();
  const sorted = sums2.sort((a, b) => b - a);
  const t = sorted[k-1];
  
  for (let i = 0; i < sums.length; i++) {
    if (sums[i]+300 >= t) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
