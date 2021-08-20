// 버블정렬
const solution = (arr) => {
  let answer = [...arr];
  let len = answer.length;
  for(let i = 0; i < len; i++){
    for(let j = 0; j < len - i - 1; j++){
      if(answer[j] > answer[j + 1]){
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      }
    }
  }
  return answer;
}

const arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));