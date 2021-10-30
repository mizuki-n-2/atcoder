"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const nums = input[0].split(" ").map(n => parseInt(n)).sort((a, b) => a-b);

  console.log(nums[0] + nums[1]);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));