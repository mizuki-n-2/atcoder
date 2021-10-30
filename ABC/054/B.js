"use strict";

const main = (arg) => {
  const input = arg.trim().split("\n");
  const [N, M] = input[0].split(" ").map(n => parseInt(n));

  // 画像AとBの画素をそれぞれ２次元配列として表す
  const A = [];
  const B = [];
  for (let i=1; i<=N; i++) {
    A.push(input[i].split(""));
  }
  for (let j=N+1; j<=N+M; j++) {
    B.push(input[j].split(""));
  }

  // 画像Bの位置をずらす(縦：i, 横：j)
  // 画像Aの中に収まるようにN-Mまでにする
  for (let i=0; i<=N-M; i++) {
    for (let j=0; j<=N-M; j++) {
      let count = 0;
      
      // 画像Bの各要素が一致しているか(縦：k, 横：l)
      for (let k=0; k<M; k++) {
        for (let l=0; l<M; l++) {
          if (A[i+k][j+l] === B[k][l]) {
            count++;
          }
        }
      }

      // M✖︎M個の点が一致すれば良い
      if (count === M * M) {
        return console.log('Yes');
      }
    }
  }
  return console.log('No');
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
