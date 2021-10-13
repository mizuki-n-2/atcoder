"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [N, M] = input[0].split(" ").map(n => parseInt(n));

  let sArray = [];
  for (let i = 1; i <= N; i++) {
    sArray.push(input[i].split(" ").map(n => parseInt(n)));
  }

  let cArray = [];
  for (let j = N+1; j <= N+M; j++) {
    cArray.push(input[j].split(" ").map(n => parseInt(n)));
  }

  for (let k = 0; k < N; k++) {
    let minD =
      Math.abs(sArray[k][0] - cArray[0][0]) +
      Math.abs(sArray[k][1] - cArray[0][1]);
    let minC = 1;
    for (let l = 1; l < M; l++) {
      let d = Math.abs(sArray[k][0] - cArray[l][0]) + Math.abs(sArray[k][1] - cArray[l][1]);
      
      if (d < minD) {
        minD = d;
        minC = l + 1;
      }
    }
    console.log(minC);
  }
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
