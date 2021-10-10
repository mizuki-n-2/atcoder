"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const b_list = ["a", "e", "i", "o", "u"];

  console.log(b_list.find((x) => x == input) ? "vowel" : "consonant");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
