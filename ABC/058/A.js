"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [a, b, c] = input[0].split(" ").map(n => parseInt(n));

  console.log(b - a === c - b ? "YES" : "NO");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
