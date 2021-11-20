"use strict";

const main = (args) => {
  const input = args.trim().split("\n");
  let [s, t, x] = input[0].split(" ").map(n => parseInt(n));

  if (s > t) {
    t += 24;
    if (s > x) x += 24;
  };

  if(x >= s && x < t) {
    console.log("Yes");
    return;
  }

  console.log("No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));