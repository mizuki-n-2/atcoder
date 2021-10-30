"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);
  const K = parseInt(input[1]);
  const X = parseInt(input[2]);
  const Y = parseInt(input[3]);

  let sum;
  if (N >= K) {
    sum = K * X + (N - K) * Y;
  } else {
    sum = N * X;
  }
  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
