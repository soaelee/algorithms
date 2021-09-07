// 최대 이용할 수 있는 회의 수 (Greedy, 최대한 많이)
const arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7]
]
const arr2 = [
  [3, 3],[1, 3], [2, 3]
]

// 끝나는 타임이 같기 때문에 시작하는 타임 기준으로 sort
const solutionG = (meeting) => {
  let cnt = 0;
  meeting.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });
  let et = 0; //end time
  for (let i of meeting) {
    if (i[0] >= et) {
      cnt++;
      et = i[1];
    }
  }

  return cnt;
};

console.log(solutionG(arr));
console.log(solutionG(arr2));