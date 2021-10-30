"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [H, W] = input[0].split(" ").map(n => parseInt(n));

  let nums = [];
  for (let i = 1; i <= H; i++) {
    const row = input[i].split(" ").map(n => parseInt(n));
    nums.push(row);
  }

  for (let i1 = 1; i1 < H; i1++) {
    for (let i2 = i1+1; i2 <= H; i2++) {
      for (let j1 = 1; j1 < W; j1++) {
        for (let j2 = j1+1; j2 <= W; j2++) {
          if (nums[i1-1][j1-1] + nums[i2-1][j2-1] > nums[i2-1][j1-1] + nums[i1-1][j2-1]) {
            console.log("No");
            return;
          }
        }
      }
    }
  }

  console.log("Yes");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
