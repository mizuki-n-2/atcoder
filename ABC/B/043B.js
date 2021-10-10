"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const str = input[0];

  let str_list = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '0' || str[i] == '1') {
      str_list.push(str[i]);
    } else {
      if (str_list.length) str_list.pop();
    }
  }

  console.log(str_list.join(""));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
