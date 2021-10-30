"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [A, B] = input[0].split(" ").map((n) => parseInt(n));
  
  console.log(A + B >= 10 ? "error" : A + B);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
