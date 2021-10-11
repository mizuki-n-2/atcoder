"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const W = parseInt(input[0].split(" ")[0]);
  const H = parseInt(input[0].split(" ")[1]);
  const N = parseInt(input[0].split(" ")[2]);

  // 左下の座標
  let lb = [0, 0];
  // 右上の座標
  let ru = [W, H];

  for (let i = 1; i <= N; i++) {
    const x = parseInt(input[i].split(" ")[0]);
    const y = parseInt(input[i].split(" ")[1]);
    const a = parseInt(input[i].split(" ")[2]);

    if (a == 1 && lb[0] < x) {
      lb[0] = x;
    }
    if (a == 2 && ru[0] > x) {
      ru[0] = x;
    }
    if (a == 3 && lb[1] < y) {
      lb[1] = y;
    }
    if (a ==4 && ru[1] > y) {
      ru[1] = y;
    }
  }
  
  if (lb[0] >= ru[0] || lb[1] >= ru[1]) {
    console.log(0);
    return;
  }

  const area = (ru[0] - lb[0]) * (ru[1] - lb[1]);
  console.log(area);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));