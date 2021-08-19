// 선택정렬로 오름차순 정렬
const solution = arr => {
  let lt = 0;
  for(let i = 0; i < arr.length - 1; i++){
    let idx = i;
    for(let j = i + 1; j < arr.length; j++){
      if(arr[j] < arr[idx]) {
        idx = arr[j];
      }
    }
    if(i !== idx) [arr[i], arr[idx]] = [arr[idx], arr[i]];
  }
  return arr;
}

const arr = [13, 5, 11, 7, 23, 15];

console.log(solution(arr));