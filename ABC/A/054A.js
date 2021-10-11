"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  let A = parseInt(input[0].split(" ")[0]);
  let B = parseInt(input[0].split(" ")[1]);

  if (A == 1) A += 13;
  if (B == 1) B += 13;

  if (A == B) {
    console.log("Draw");
  } else if (A > B) {
    console.log("Alice");
  } else {
    console.log("Bob");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
