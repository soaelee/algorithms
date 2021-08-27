//캐시 LRU(Least Recently Used)

const solution = (size, arr) => {
  let cache = Array.from({length: size});
  
  for(let i of arr){
    let idx = 0;
    if(!cache.includes(i)){
      idx = size - 2;
    } else {
      idx = cache.indexOf(i) - 1;
    }
    for(let j = idx; j >= 0; j--){
      cache[j + 1] = cache[j];
    }
    cache[0] = i;
    // else{
    //   let idx = cache.indexOf(i);
    //   for(let j = 0;j < idx; j++){
    //     cache[j + 1] = cache[j];
    //   }
    // }
    // cache[0] = i;
  }
  return cache;
}

const arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(solution(5, arr));

const solutionT = (size, arr) => {
  let answer = Array.from({length: size}, () => 0);

  arr.forEach((el) => {
    let pos = answer.includes(el) ? answer.indexOf(el) : size - 1;
    if(pos === size - 1){
      answer.unshift(el);
      answer.pop()
    } else {
      answer.splice(el, 1);
      answer.unshift(el);
    }
  })
  return answer;
}

console.log(solutionT(5, arr));