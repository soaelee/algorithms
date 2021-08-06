// 산봉우리 갯수
const solution = arr => {
  let n = arr.length + 2;
  let answer = Array.from(Array(n), () => new Array(n).fill(0));
  let cnt = 0;
  for(let i = 0; i < n - 2; i++){
    for(let j = 0; j < n - 2; j++){
      answer[i + 1][j + 1] = arr[i][j];
    }
  }

  for(let i = 1; i <= n - 2; i++){
    for(let j = 1; j <= n - 2; j++){
      if(answer[i][j] > Math.max(answer[i - 1][j], answer[i + 1][j], answer[i][j - 1], answer[i][j + 1])){
        cnt++;
      }
    }
  }
  return cnt;
}

const arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2]
]

console.log(solution(arr));

// 0으로 초기화안하고 좌표 이용해서
const solutionT = arr => {

  const X = [ -1, +1, 0, 0];
  const Y = [ 0, 0, -1, +1];
  const n = arr.length;

  let cnt = 0;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      let flag = true;
      for(let k = 0; k < 4; k++) {
        let x = i + X[k];
        let y = j + Y[k];
        if(x >= 0 && x < n && y >= 0 && y < n){
          if(arr[i][j] < arr[x][y]) {
            flag = false;
            break;
          }
        }
      }
      if(flag) cnt++;
    }
  }

  return cnt;
}

console.log(solutionT(arr));