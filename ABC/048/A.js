"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const name = input[0].split(" ")[1];

  console.log("A" + name[0] + "C");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
