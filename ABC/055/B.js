"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = BigInt(input[0]);

  let p = 1n;
  // NOTE: ループの中で階乗計算のみにすると、10^5でTLE
  for (let i = 1n; i <= N; i++) {
    p = (p * i) % BigInt(10 ** 9 + 7);
  }
  console.log(p.toString());
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
