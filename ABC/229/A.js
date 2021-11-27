"use strict";

const main = (args) => {
  const input = args.trim().split("\n");
  const s1 = input[0];
  const s2 = input[1];

  if ((s1 == '#.' && s2 == '.#') || (s1 == '.#' && s2 == '#.')) {
    console.log('No');
  } else {
    console.log('Yes');
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
