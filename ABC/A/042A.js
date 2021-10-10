"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const numbers = input[0].split(" ").map(n => parseInt(n));
  
  let count5 = 0;
  let count7 = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] != 5 && numbers[i] != 7) {
      console.log("NO");
      return;
    }
    if (numbers[i] == 5) count5++;
    if (numbers[i] == 7) count7++;
  }

  if (count5 == 2 && count7 == 1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));