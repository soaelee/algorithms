// 자리 바꾼 사람들의 번호 출력
const solution = () => {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (answer.length === 0) {
      if (arr[i] > arr[i + 2]) {
        answer.push(i + 1);
        continue;
      }
    } else {
      if (arr[i] < arr[i - 1] && arr[i + 1] > arr[answer[0] - 1]) {
        answer.push(i + 1);
        break;
      }
    }
  }

  return answer;
};

const arr = [120, 125, 152, 130, 135, 135, 143, 127, 160]

console.log(solution(arr));
