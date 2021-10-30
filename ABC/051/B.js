"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const K = parseInt(input[0].split(" ")[0]);
  const S = parseInt(input[0].split(" ")[1]);

  let count = 0;

  for (let i = 0; i <= K; i++) {
    for (let j = 0; j <= K; j++) {
      const k = S - i - j;
      if (k >= 0 && k <= K) count++;
    }
  }

  console.log(count);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
