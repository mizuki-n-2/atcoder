"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);
  const ans = N * (N + 1) / 2;
  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
