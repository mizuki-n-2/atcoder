"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n")[0];
  
  let words = [];
  for (let i = 0; i < input.length; i++) {
    const index = words.findIndex(w => w === input[i]);
    if (index === -1) {
      words.push(input[i]);
    } else {
      words.splice(index, 1);
    }
  }

  console.log(words.length === 0 ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
