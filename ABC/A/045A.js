"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const a = parseInt(input[0]);
  const b = parseInt(input[1]);
  const h = parseInt(input[2]);

  const area = ((a + b) * h) / 2;
  console.log(area);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
