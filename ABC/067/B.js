"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [N, K] = input[0].split(" ").map(n => parseInt(n));
  const sortedLengthArray = input[1].split(" ").map(n => parseInt(n)).sort((a, b) => b - a);

  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += sortedLengthArray[i];
  }

  console.log(sum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));