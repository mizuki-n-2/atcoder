"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [H, W] = input[0].split(" ").map((n) => parseInt(n));

  for (let i = 0; i <= H + 1; i++) {
    if (i === 0 || i === H + 1) {
      console.log("#".repeat(W + 2));
    } else {
      const str = input[i];
      console.log("#" + str + "#");
    }
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
