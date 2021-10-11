"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0].split(" ")[0]);
  const K = parseInt(input[0].split(" ")[1]);
  const D_nums = input[1].split(" ");

  let isOk = true;
  for (let i = N; i < 100000; i++) {
    for (let j = 0; j < i.toString().length; j++) {
      if (D_nums.find(d => d == i.toString()[j])) {
        isOk = false;
        break;
      }
    }

    if (isOk) {
      console.log(i);
      return;
    }

    isOk = true;
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
