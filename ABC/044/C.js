"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [N, A] = input[0].split(" ").map((n) => parseInt(n));
  const x = input[1].split(" ").map((n) => parseInt(n));

  // 動的計画法(DP)を用いる
  let dp = Array(2)
    .fill(0)
    .map((a) =>
      Array(N + 1)
        .fill(0)
        .map((a) => Array(N * 50 + 1).fill(0))
    );

  dp[0][0][0] = 1;

  for (let i = 1; i <= N; i++) {
    dp[i & 1][0][0] = 1;
    for (let j = 1; j <= i; j++) {
      for (let k = 0; k <= j * 50; k++) {
        dp[i & 1][j][k] = dp[(i + 1) & 1][j][k];
        if (k >= x[i - 1])
          dp[i & 1][j][k] += dp[(i + 1) & 1][j - 1][k - x[i - 1]];
      }
    }
  }

  let ans = 0;
  for (let l = 1; l <= N; l++) {
    ans += dp[N & 1][l][l * A];
  }

  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
