"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);
  const nums = input[1].split(" ").map(n => parseInt(n)).sort((a, b) => a - b);
  
  if ([...new Set(nums)].length === 1) {
    console.log(0);
    return;
  } 

  const m = nums[0];
  const M = nums[N - 1];
  let min = 0;

  for (let i = m; i <= M; i++) { 
    let cost = 0;
    for (let j = 0; j < N; j++) {
      cost += (nums[j] - i) ** 2;
    }

    if (i === m) min = cost;

    if (cost < min) min = cost;
  }

  console.log(min);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));