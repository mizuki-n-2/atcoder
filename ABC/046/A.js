"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const numbers = input[0].split(" ").map(n => parseInt(n));

  const numbers_no_dup = [...new Set(numbers)];

  console.log(numbers_no_dup.length);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
