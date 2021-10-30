"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const S = input[0];

  if (S.slice(-2) === "er") {
    console.log("er");
  } else {
    console.log("ist");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
