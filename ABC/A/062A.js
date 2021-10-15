"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [x, y] = input[0].split(" ").map(n => parseInt(n));
  const g1 = [1, 3, 5, 7, 8, 10, 12];
  const g2 = [4, 6, 9, 11];

  if (
    (g1.find((n) => n === x) && g1.find((n) => n === y)) ||
    (g2.find((n) => n === x) && g2.find((n) => n === y)) ||
    (x === 2 && y === 2)
  ) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));