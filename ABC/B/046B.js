"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const N = parseInt(input[0].split(" ")[0]);
  const K = parseInt(input[0].split(" ")[1]);

  const count = K * (K-1)**(N-1);

  console.log(count);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
