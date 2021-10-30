"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const H = parseInt(input[0].split(" ")[0]);
  const W = parseInt(input[0].split(" ")[1]);

  for (let i = 1; i <= H; i++) {
    console.log(input[i]);
    console.log(input[i]);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
