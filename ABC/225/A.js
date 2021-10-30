"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const s_array = input[0].split("");
  const new_array = [...new Set(s_array)];

  if (new_array.length === 1) {
    console.log(1);
  } else if (new_array.length === 2) {
    console.log(3);
  } else {
    console.log(6);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));