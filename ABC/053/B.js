"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  let strArray = input[0].split("");

  const aNum = strArray.findIndex(s => s === "A");
  strArray.splice(0, aNum);
  const zNum = strArray.reverse().findIndex(s => s === "Z");
  strArray.reverse().splice(0, zNum);
  console.log(strArray.length);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
