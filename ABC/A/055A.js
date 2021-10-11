"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);
  const x = N * 800;
  const y = Math.floor(N / 15) * 200;

  console.log(x - y);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));