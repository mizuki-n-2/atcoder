"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const words = input[0].split("");
  const words_no_dup = [...new Set(words)];

  console.log(words.length === words_no_dup.length ? "yes" : "no");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));