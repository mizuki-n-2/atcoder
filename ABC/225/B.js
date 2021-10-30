"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);

  const nums = input[1].split(" ").map(n => parseInt(n));

  let countNumFirst = 1;
  let countNumSecond = 1;
  for (let i = 1; i < N-1; i++) {
    const pair = input[i + 1].split(" ").map(n => parseInt(n));
    if(pair[0] === nums[0]) {
      countNumFirst++;
    }
    if(pair[0] === nums[1]) {
      countNumSecond++;
    }
    if(pair[1] === nums[0]) {
      countNumFirst++;
    }
    if(pair[1] === nums[1]) {
      countNumSecond++;
    }
  }

  if(countNumFirst === N-1 || countNumSecond === N-1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
