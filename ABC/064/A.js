"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const n = parseInt(input[0].split(" ").join(""));

  console.log(n % 4 === 0 ? "YES" : "NO");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));