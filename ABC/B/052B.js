"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);
  const S = input[1];

  let x = 0;
  let max = 0;
  for (let i = 0; i < N; i++) {
    if (S[i] === "I") x++;
    if (S[i] === "D") x--;

    if (x >= max) max = x;
  }

  console.log(max);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
