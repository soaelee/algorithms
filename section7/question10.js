// 이진탐색
// 정렬되어 있는 상태여야 한다.
const solution = (m, arr) => {
  const answer = [...arr].sort((a, b) => a - b);
  let high = answer.length - 1;
  let low = 0;
  let pos;
  let mid;
  while(low <= high){
    mid = Math.floor((high + low) / 2);
    console.log(high, low, mid);
    if(answer[mid] === m) {
      pos = mid; 
      break;
    }
    else if(answer[mid] > m) high = mid - 1;
    else low = mid + 1;
  }
  console.log(answer);
  return pos + 1;
};

const arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));