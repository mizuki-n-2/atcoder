"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [A, B, C] = input[0].split(" ");

  console.log(A[A.length - 1] == B[0] && B[B.length - 1] == C[0] ? "YES" : "NO");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));