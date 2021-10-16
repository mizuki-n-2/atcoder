"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [X, A, B] = input[0].split(" ").map(n => parseInt(n));

  if (B - A <= 0) {
    console.log("delicious");
  } else {
    console.log(B - A <= X ? "safe" : "dangerous");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
