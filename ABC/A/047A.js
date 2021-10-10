"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const numbers = input[0].split(" ").map(n => parseInt(n)).sort((x, y) => x - y);

  console.log(numbers[0] + numbers[1] === numbers[2] ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
