"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const s = input[0].split(" ");

  console.log((s[0][0] + s[1][0] + s[2][0]).toUpperCase());
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));