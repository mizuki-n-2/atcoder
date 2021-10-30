"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");

  console.log(input[0].split(",").join(" "));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
