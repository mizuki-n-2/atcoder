"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [A, B] = input[0].split(" ").map(n => parseInt(n));

  console.log(
    A % 3 === 0 || B % 3 === 0 || (A + B) % 3 === 0 ? "Possible" : "Impossible"
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
