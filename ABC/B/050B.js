"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);
  const times = input[1].split(" ").map(n => parseInt(n));
  const M = parseInt(input[2]);

  let times_sum = 0;
  for (let i = 0; i < N; i++) {
    times_sum += times[i];
  }

  for (let j = 0; j < M; j++) {
    const n = parseInt(input[j + 3].split(" ")[0]);
    const x = parseInt(input[j + 3].split(" ")[1]);

    const current_sum = times_sum + x - times[n-1];
    console.log(current_sum);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
