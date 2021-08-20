// 구글인터뷰
// 음의정수는 앞쪽에 양의정수는 뒷쪽에, 순서는 변하지 않는다
const solution = arr =>{
  let answer = [...arr];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (answer[j + 1] < 0 && answer[j] > 0) {
        [answer[j], answer[j + 1]] = [answer[j + 1], answer[j]];
      };
    }
  }
  return answer;
}

const arr = [1, 2, 3, -3, -2, 5, 6, -6];

console.log(solution(arr));
// 기대값 [-3, -2, -6, 1, 2, 3, 5, 6];