"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [a, b] = input[0].split(" ");
  
  console.log(a === b ? "H" : "D");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));