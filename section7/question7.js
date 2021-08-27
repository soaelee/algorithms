// 좌표 오름차순 정렬
const solution = arr => {
  let answer = [...arr];
  let len = answer.length;
  for(let i = 1; i < len; i++){
    let tmp = answer[i];
    let j = i - 1;
    while (j >= 0 && tmp[0] <= answer[j][0]) {
      if (tmp[0] === answer[j][0] && tmp[1] < answer[j][1]) {
        answer[j + 1] = answer[j];
      } else if (tmp[0] < answer[j][0]) {
        answer[j + 1] = answer[j];
      }
      j--;
    }
    answer[j + 1] = tmp;
  }
  return answer;
}

const arr = [
  [2, 7], [1, 3], [1, 2], [2, 5], [3, 6]
]

console.log(solution(arr));

// sort 함수 이용해서 2차원 배열 정렬하기
const solutionS = (arr) => {
  let answer = arr.slice();

  answer.sort((a, b) => {
    if(a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  })
  return answer;
}

console.log(solutionS(arr));