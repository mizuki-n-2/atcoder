"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const numbers = input[0].split(" ").map(n => parseInt(n));
  const A = numbers[0];
  const B = numbers[1];
  const C = numbers[2];
  const D = numbers[3];

  const area1 = A * B;
  const area2 = C * D;

  console.log(area1 >= area2 ? area1 : area2);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
