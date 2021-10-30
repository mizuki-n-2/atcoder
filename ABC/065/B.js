"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);

  // 最初は必ず1が光っているので、その場合
  let count = 1;
  let targetBtn = parseInt(input[1]);
  if (targetBtn === 2) {
    console.log(count);
    return;
  }

  for (let i = 0; i < N; i++) {
    count++;
    targetBtn = parseInt(input[targetBtn]);
    if (targetBtn === 2) {
      console.log(count);
      return;
    }
  }

  console.log(-1);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
