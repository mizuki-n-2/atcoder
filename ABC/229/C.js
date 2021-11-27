"use strict";

const main = (args) => {
  const input = args.trim().split("\n");
  const [n, w] = input[0].split(" ").map(n => parseInt(n));

  let array = [];
  for (let i = 1; i <= n; i++) {
    array.push(input[i].split(" ").map(n => parseInt(n)));
  }
  array.sort((a, b) => b[0] - a[0]);

  let rest = w;
  let aSum = 0;
  for (let i = 0; i < array.length; i++) {
    if (rest - array[i][1] >= 0) {
      rest -= array[i][1];
      aSum += array[i][0] * array[i][1];
    } else {
      aSum += array[i][0] * rest;
      rest = 0;
    }
  }

  console.log(aSum);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
