"use strict";

const main = (args) => {
  const input = args.trim().split("\n");
  const aArray = input[0].split(" ")[0].split("").map(n => parseInt(n)).reverse();
  const bArray = input[0].split(" ")[1].split("").map(n => parseInt(n)).reverse();

  let length = aArray.length > bArray.length ? bArray.length : aArray.length;

  for (let i = 0; i < length; i++) {
    if (aArray[i] + bArray[i] >= 10) {
      console.log("Hard");
      return;
    }
  }

  console.log("Easy");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
