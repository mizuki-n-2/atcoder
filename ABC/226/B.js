"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0]);

  let array = [];
  for (let i = 0; i < N; i++) {
    const line = input[i + 1].split(" ").map(n => parseInt(n));
    array.push(line);
  }

  const newArray = [...new Set(array.map(JSON.stringify))].map(JSON.parse);
  console.log(newArray.length);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
