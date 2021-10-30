"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [W, a, b] = input[0].split(" ").map(n => parseInt(n));

  let ans;
  if (a == b) {
    ans = 0;
  } else if (a < b) {
    ans = b - (a + W) > 0 ? b - (a + W) : 0;
  } else {
    ans = a - (b + W) > 0 ? a - (b + W) : 0;
  }

  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));