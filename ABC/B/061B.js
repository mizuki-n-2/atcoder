"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [N, M] = input[0].split(" ").map(n => parseInt(n));

  let cities = [];
  for (let i = 0; i < M; i++) {
    const inputCities = input[i + 1].split(" ").map(n => parseInt(n));
    cities = cities.concat(inputCities);
  }

  for (let j = 0; j < N; j++) {
    const count = cities.filter(c => c === j + 1).length;
    console.log(count);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
