"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [A, B, C] = input[0].split(" ").map(n => parseInt(n));

  console.log(C >= A && C <= B ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
