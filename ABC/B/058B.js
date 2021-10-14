"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const O = input[0].split("");
  const E = input[1].split("");

  let array = [];
  for (let i = 0; i < O.length + E.length; i++) {
    if (i % 2 == 0) {
      array.push(O[i/2]);
    } else {
      array.push(E[(i-1)/2]);
    }
  }

  console.log(array.join(""));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));