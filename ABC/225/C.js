"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [N, M] = input[0].split(" ").map(n => parseInt(n));

  let num_array = [];
  for (let k = 1; k <= N; k++) {
    const elem_array = input[k].split(" ").map(n => parseInt(n));
    num_array.push(elem_array);
  }

  let flag = true;
  for (let i = 0; i < N && flag; i++) {
    for (let j = 0; j < M; j++) {
      if(num_array[i][j] % 7 === 0 && j !== M-1) flag = false;
      if(num_array[i][j] % 7 === 1 && j !== 0) flag = false;
      if (j > 0 && num_array[i][j] - num_array[i][j-1] !== 1) flag = false;
      if (i > 0 && num_array[i][j] - num_array[i-1][j] !== 7)
        flag = false;
    }
  }

  console.log(flag ? "Yes" : "No");
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
