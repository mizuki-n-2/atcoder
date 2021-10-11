"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const a = BigInt(input[0].split(" ")[0]);
  const b = BigInt(input[0].split(" ")[1]);
  const x = BigInt(input[0].split(" ")[2]);

  const to_a_count = a / x;
  const to_b_count = b / x;

  console.log(
    a % x == 0 ? (to_b_count - to_a_count + 1n).toString() : (to_b_count - to_a_count).toString()
  );
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
