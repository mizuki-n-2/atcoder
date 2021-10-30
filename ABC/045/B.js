"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  let sa = input[0].split("");
  let sb = input[1].split("");
  let sc = input[2].split("");

  let next = sa.shift();
  let winner;
  let isFin = false;
  while (!isFin) {
    if (next === "a") {
      if (sa.length) {
        next = sa.shift();
      } else {
        winner = "A";
        isFin = true;
      }
    } else if (next === "b") {
      if (sb.length) {
        next = sb.shift();
      } else {
        winner = "B";
        isFin = true;
      }
    } else {
      if (sc.length) {
        next = sc.shift();
      } else {
        winner = "C";
        isFin = true;
      }
    }
  }

  console.log(winner);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
