"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const x = parseInt(input[0]);

  if (x < 1200) {
    console.log("ABC");
  } else {
    console.log("ARC");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));