"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n")[0].split(" ");
  
  let ans;
  if (input[1] == "+") {
    ans = parseInt(input[0]) + parseInt(input[2]);
  } else {
    ans = parseInt(input[0]) - parseInt(input[2]);
  }

  console.log(ans);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
