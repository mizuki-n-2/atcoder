"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const A = BigInt(input[0]);
  const B = BigInt(input[1]);

  if (A > B) {
    console.log("GREATER");
  } else if (A === B) {
    console.log("EQUAL");
  } else {
    console.log("LESS");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
