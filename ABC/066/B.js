"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  let S = input[0];

  if (S.length === 2) {
    console.log(1);
    return;
  } else {
    for (let i = 0; i < S.length; i++) {
      S = S.slice(0, -2);
      if (S.substr(0, S.length / 2) === S.substr(S.length / 2)) {
        console.log(S.length);
        return;
      }
    }
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
