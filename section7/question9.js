// 최대한 많은 결혼식 피로연
const solution = (arr) => {
  const answer = [...arr].sort((a, b) => {if(a[1] === b[1]) return a[1] - b[2]; else return a[0] - b[0]});
  const len = answer.length - 1;
  let max = 0;

  for(let i = 0; i < len; i++){
    const tmp = answer[i];
    let j = i + 1; 
    let cnt = 1;
    while (tmp[1] > answer[j][0] && tmp[1] <= answer[j][1]) {
      cnt++;
      j++;
    }
    if(cnt > max) max = cnt;
  }
  return max;
}

const arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14]
]
//console.log(solution(arr));

const solutionT = (arr) => {
  let timeLine = [];

  for(let i of arr){
    timeLine.push([i[0], "s"]);
    timeLine.push([i[1], "e"]);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  let max = 0;
  let cnt = 0;
  for(let i of timeLine){
    if(i[1] === 's') cnt++;
    else {
      if(max < cnt) max = cnt;
      cnt--;
    }
  }
  return max;
}
console.log(solutionT(arr));