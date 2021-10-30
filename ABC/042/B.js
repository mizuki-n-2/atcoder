"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0].split(" ")[0]);
  const L = parseInt(input[0].split(" ")[1]);

  let words = [];
  for (let i = 1; i <= N; i++) {
    words.push(input[i]);
  }

  words.sort();
  console.log(words.join(""));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));