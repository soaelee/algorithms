//삽입정렬 
const solution = arr => {
  for(let i = 1; i < arr.length; i++){
    let idx = i;
    for(let j = i - 1; j >= 0; j--){
      if(arr[idx] < arr[j]) {
        [arr[idx], arr[j]] = [arr[j], arr[idx]];
        idx = j;
      }
    }
  }
  return arr;
}

const arr = [11, 7, 5, 6, 10, 9];

console.log(solution(arr));

const solutionA = arr => {
  for(let i = 1; i < arr.length; i++){
    let tmp = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] > tmp){
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = tmp;
  }

  return arr
}
console.log(solutionA(arr));
