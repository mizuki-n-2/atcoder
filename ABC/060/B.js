"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [A, B, C] = input[0].split(" ").map(n => parseInt(n));

  for (let i = 1; i <= 100; i++) {
    if (i * A % B === C) {
      console.log("YES");
      return;
    }
  }

  console.log("NO");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
