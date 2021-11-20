"use strict";

const main = (args) => {
  const input = args.trim().split("\n");
  const [n, x] = input[0].split(" ").map(n => parseInt(n));

  const a = input[1].split(" ").map(n => parseInt(n));

  let num = x;
  let array = [x];
  for (let i = 0; i < a.length; i++) {
    num = a[num - 1];
    array.push(num);
  }

  console.log([... new Set(array)].length);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
