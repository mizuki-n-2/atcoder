"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);
  const a = input[1].split(" ").map(n => parseInt(n));

  let max = a[0];
  let min = a[0];

  for (let i = 1; i < N; i++) {
    if (a[i] > max) max = a[i];
    if (a[i] < min) min = a[i];
  }

  console.log(max - min);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
